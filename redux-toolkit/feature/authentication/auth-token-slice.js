import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const authTokenSlice = createSlice({
  name: 'token',
  initialState: initialState,
  reducers: {
    setToken: (state, action) => {
      state.value = action.payload;
    },
    resetToken: state => {
      state.value = '';
    },
  },
});

export const {setToken, resetToken} = authTokenSlice.actions;

export const selectToken = state => {
  //   console.log('state:', state.authToken);
  state.authToken.value;
};

export default authTokenSlice.reducer;
