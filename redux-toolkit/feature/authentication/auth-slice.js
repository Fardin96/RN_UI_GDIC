import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {API_URL} from '@env';

export const authSlice = createApi({
  reducerPath: 'auth-slice',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: builder => {
    return {
      addUser: builder.mutation({
        query: data => ({
          url: '/newUser/add/',
          method: 'POST',
          body: data,
        }),
      }),
      login: builder.mutation({
        query: data => ({
          url: '/auth/login/',
          method: 'POST',
          body: data,
        }),
      }),
    };
  },
});

export const {useAddUserMutation, useLoginMutation} = authSlice;
