import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: {
    id: '',
    firstName: '',
    lastName: '',
    dob: '',
    salary: '',
    phone: '',
    gender: '',
    skill: '',
    exp: '',
    lvl: '',
  },
  status: 'idle',
};

export const empInfoSlice = createSlice({
  name: 'empInfo',
  initialState: initialState,
  reducers: {
    setId: (state, action) => {
      state.value.id = action.payload;
    },
    setFirstName: (state, action) => {
      state.value.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.value.lastName = action.payload;
    },
    setDob: (state, action) => {
      state.value.dob = action.payload;
    },
    setSalary: (state, action) => {
      state.value.salary = action.payload;
    },
    setPhone: (state, action) => {
      state.value.phone = action.payload;
    },
    setGender: (state, action) => {
      state.value.gender = action.payload;
    },
    setSkill: (state, action) => {
      state.value.skill = action.payload;
    },
    setLvl: (state, action) => {
      state.value.lvl = action.payload;
    },
  },
});

export const {
  setId,
  setFirstName,
  setLastName,
  setDob,
  setSalary,
  setPhone,
  setGender,
  setSkill,
  setLvl,
} = empInfoSlice.actions;

export const getInfo = state => state.empInfo.value;

export default empInfoSlice.reducer;
