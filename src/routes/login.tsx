import {createFileRoute, redirect} from '@tanstack/react-router'
import {useEffect} from "react";
import Login from "@/features/auth/login/login.component.tsx";
import {useTranslation} from "react-i18next";
export const Route = createFileRoute('/login')({
    component: RouteComponent,
    beforeLoad: () => {
        const user = localStorage.getItem('user');
        if (user) {
            throw redirect({
                to: '/dashboard',
            })
        }
    }
})

function RouteComponent() {
    const {t, i18n} = useTranslation();
    const { redirect } = Route.useSearch() as { redirect?: string };

    useEffect(() => {
        document.title = t('title', {ns: 'login'});
    }, [i18n.language])

    return <Login search={{
        redirect: redirect || undefined,
    }}/>
}
