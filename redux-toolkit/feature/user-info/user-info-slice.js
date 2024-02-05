import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: {
    id: '',
    userName: '',
    password: '',
    jwt_token: '',
  },
};

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: initialState,
  reducers: {
    setUserName: (state, action) => {
      state.value.userName = action.payload;
    },
    setPassword: (state, action) => {
      state.value.password = action.payload;
    },
    setToken: (state, action) => {
      state.value.jwt_token = action.payload;
    },
  },
});

export const {setUserName, setPassword, setToken} = userInfoSlice.actions;

export const getInfo = state => state.userInfo.value;

export default userInfoSlice.reducer;
