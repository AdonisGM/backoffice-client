import { BasicApi } from '@/networks/call-api.ts';

export const apiGetCustomerAutocomplete: BasicApi<undefined, GetCustomerAutocompleteRes> = {
  url: '/users',
  method: 'GET',
  contentType: 'application/json',
};
export interface GetCustomerAutocompleteRes {
  data: Array<{
    id: number;
    email: string;
    name: {
      firstname: string;
      lastname: string;
    };
  }>;
}
