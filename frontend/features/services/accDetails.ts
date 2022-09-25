import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IFormAccDetails } from '../../types/global';

export const accDetailsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/users'
  }),
  endpoints: (builder) => ({
    getAccDetails: builder.query<IFormAccDetails[], void>({
      query: ()  => '/'
    }),
    updateAccDetails: builder.mutation<IFormAccDetails, {[key:string]:string}>({
      query: (changedFormData) => ({
        url: '/1/',
        method: 'PATCH',
        body: changedFormData
      })
    })
  })

});

export const { useGetAccDetailsQuery, useUpdateAccDetailsMutation } = accDetailsApi;