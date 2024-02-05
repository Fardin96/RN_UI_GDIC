import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: {},
};

export const empInfoSlice = createSlice({
  name: 'empInfo',
  initialState: initialState,
  reducers: {
    setEmpInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {setEmpInfo} = empInfoSlice.actions;

export const getInfo = state => state.employees.value;

export default empInfoSlice.reducer;
