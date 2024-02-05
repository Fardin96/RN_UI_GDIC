import {configureStore} from '@reduxjs/toolkit';

import {empApiSlice} from '../feature/employee-info/employee-api-slice';
import {authSlice} from '../feature/authentication/auth-slice';
import empInfoReducer from '../feature/employee-info/emp-info-slice';
// import userInfoReducer from '../feature/user-info/user-info-slice';
import authTokenReducer from '../feature/authentication/auth-token-slice';

export const store = configureStore({
  reducer: {
    authToken: authTokenReducer,
    [authSlice.reducerPath]: authSlice.reducer,
    // useInfo: userInfoReducer,
    employees: empInfoReducer,
    [empApiSlice.reducerPath]: empApiSlice.reducer,
  },
  middleware: getDefaultMiddhleware => [
    ...getDefaultMiddhleware(),
    empApiSlice.middleware,
    authSlice.middleware,
  ],
});
