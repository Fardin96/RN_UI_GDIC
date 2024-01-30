import {configureStore} from '@reduxjs/toolkit';
import {empApiSlice} from '../feature/employee-api-slice';

export const store = configureStore({
  reducer: {
    [empApiSlice.reducerPath]: empApiSlice.reducer,
  },
  middleware: getDefaultMiddhleware => [
    ...getDefaultMiddhleware(),
    empApiSlice.middleware,
  ],
});
