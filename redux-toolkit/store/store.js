import {configureStore} from '@reduxjs/toolkit';
import {empApiSlice} from '../feature/employee-api-slice';
import {authSlice} from '../feature/authentication/auth-slice';

export const store = configureStore({
  reducer: {
    [empApiSlice.reducerPath]: empApiSlice.reducer,
    [authSlice.reducerPath]: authSlice.reducer,
  },
  middleware: getDefaultMiddhleware => [
    ...getDefaultMiddhleware(),
    empApiSlice.middleware,
    authSlice.middleware,
  ],
});
