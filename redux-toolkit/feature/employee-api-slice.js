import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const empApiSlice = createApi({
  reducerPath: 'employee-api-slice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummy.restapiexample.com/api/v1',
  }),
  endpoints: builder => {
    return {
      getEmp: builder.query({
        query: () => '/employees',
      }),
    };
  },
});

export const {useGetEmpQuery} = empApiSlice;
