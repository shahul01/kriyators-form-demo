import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IFormAccDetails, IAccDetails } from '../../types/global';

export const accDetailsApi = createApi({
  tagTypes: ['accDetails'],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BACKEND_API || 'http://localhost:8000/users'
  }),
  endpoints: (builder) => ({
    getAccDetails: builder.query<IAccDetails[], void>({
      query: ()  => '/'
    }),
    updateAccDetails: builder.mutation<IFormAccDetails, {[key:string]:any}>({
      query: (changedFormData) => ({
        url: '/1/',
        method: 'PATCH',
        body: changedFormData
      }),
      invalidatesTags: ['accDetails']
    })
  })

});

export const { useGetAccDetailsQuery, useUpdateAccDetailsMutation } = accDetailsApi;
