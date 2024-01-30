import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const empApiSlice = createApi({
  reducerPath: 'employee-api-slice',
  baseQuery: fetchBaseQuery({
    // todo:
    // - create api url @ .env
    baseUrl: 'https://dummy.restapiexample.com/api/v1',
  }),
  endpoints: builder => {
    return {
      getEmp: builder.query({
        query: () => '/employees',
      }),
      createEmp: builder.mutation({
        query: data => ({
          url: '/create',
          method: 'POST',
          body: data,
        }),
      }),
      editEmp: builder.mutation({
        query: ({id, ...data}) => ({
          url: `/update/${id}`,
          method: 'PUT',
          body: data,
        }),
      }),
    };
  },
});

export const {useGetEmpQuery, useCreateEmpMutation, useEditEmpMutation} =
  empApiSlice;
