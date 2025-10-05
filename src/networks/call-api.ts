import {router} from '@/router.ts';

export type MethodType = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';
export type ContentType = 'application/json' | 'application/x-www-form-urlencoded' | 'multipart/form-data';
export interface BasicApi {
    url: string;
    method: MethodType;
    contentType?: ContentType;
}
export interface Paging {
    page: {
        page: number,
        limit: number,
        no: number
    }
    total: number
}

export const callApi = async <Req, Res>({api, params, body, query}: {
    api: BasicApi,
    params?: string[],
    body: Req,
    query?: {[key: string]: string | number | boolean | undefined | null},
}): Promise<Res> => {
    const endpoint = import.meta.env.MODE === 'production' ? '/api' : import.meta.env.VITE_APP_URL as string;

    let url = endpoint + api.url;

    // Append parameters to the URL if provided
    if (params && params.length > 0) {
        params.forEach((param, index) => {
            url = url.replace(`{${index}}`, param);
        });
    }

    // Append query parameters to the URL if provided
    if (query && Object.keys(query).length > 0) {
        url += '?' + Object.entries(query).map(([key, value]) => {
            if (value === undefined || value === null) {
                return '';
            }
            return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        }).filter(Boolean).join('&');
    }

    const headers: Record<string, string> = {}
    if (api.contentType) {
        headers['Content-Type'] = api.contentType;
    }

    const processBody = (api.contentType === 'application/json' ? JSON.stringify(body) : body as FormData);

    const response = await fetch(url, {
        method: api.method,
        headers: headers,
        body: processBody,
        credentials: 'include',
    });

    if (!response.ok) {
        if (response.status === 401) {
            localStorage.removeItem('account');
            localStorage.removeItem('uuid');
            await router.navigate({
                to: '/login',
                replace: true,
            });
        }

        console.error(response.statusText);
        throw new Error(`API call failed: ${response.statusText}`);
    }

    return await response.json() as Res;
};

export const callDownloadFile = async ({api, params}: {
    api: BasicApi,
    params?: string[],
}) => {
    const endpoint = import.meta.env.VITE_APP_URL as string;
    let url = `${endpoint}${api.url}`;

    // Append parameters to the URL if provided
    if (params && params.length > 0) {
        params.forEach((param, index) => {
            url = url.replace(`{${index}}`, param);
        });
    }

    const res = await fetch(url, {
        method: api.method,
        headers: {
            'Content-Type': api.contentType || 'application/json',
        },
        credentials: 'include',
    });

    if (!res.ok) {
        if (res.status === 401) {
            await router.navigate({
                to: '/login',
                replace: true,
            });
        }

        console.error(res.statusText);
        throw new Error(`File download failed: ${res.statusText}`);
    }

    // Get file name
    const contentDisposition = res.headers.get('Content-Disposition');
    console.log('Content-Disposition:', contentDisposition);
    const apiFileName = contentDisposition ? contentDisposition.split('filename=')[1]?.replace(/"/g, '') : undefined;
    if (!apiFileName) {
        throw new Error('File name not found in response headers');
    }

    const blob = await res.blob();
    const urlBlob = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = urlBlob;
    a.download = apiFileName;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(urlBlob);
};