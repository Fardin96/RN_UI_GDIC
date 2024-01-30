import {configureStore} from '@reduxjs/toolkit';

import {empApiSlice} from '../feature/employee-api-slice';
import {authSlice} from '../feature/authentication/auth-slice';
import empInfoReducer from '../feature/employee-info/emp-info-slice';
import userInfoReducer from '../feature/user-info/user-info-slice';

export const store = configureStore({
  reducer: {
    useInfo: userInfoReducer,
    empInfo: empInfoReducer,
    [empApiSlice.reducerPath]: empApiSlice.reducer,
    [authSlice.reducerPath]: authSlice.reducer,
  },
  middleware: getDefaultMiddhleware => [
    ...getDefaultMiddhleware(),
    empApiSlice.middleware,
    authSlice.middleware,
  ],
});
