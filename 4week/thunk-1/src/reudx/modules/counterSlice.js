// src/redux/modules/counterSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const __addNumber = createAsyncThunk("addNumber", (payload, thunkAPI) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      thunkAPI.dispatch(addNumber(payload));
      resolve(); // 비동기 작업 완료 후 resolve 호출
    }, 3000);
  });
});

export const __minusNumber = createAsyncThunk("addNumber", (payload, thunkAPI) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      thunkAPI.dispatch(minusNumber(payload));
      resolve(); // 비동기 작업 완료 후 resolve 호출
    }, 3000);
  });
});

const initialState = {
  number: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.number = state.number + action.payload;
    },

    minusNumber: (state, action) => {
      state.number = state.number - action.payload;
    },
  },
});

export const { addNumber, minusNumber } = counterSlice.actions;
export default counterSlice.reducer;
