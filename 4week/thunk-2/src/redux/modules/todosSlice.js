import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  isLoding: false,
  isError: false,
  error: null,
};
export const __getTodos = createAsyncThunk("getTodos", async (payload, thunkAPI) => {
  try {
    const response = await axios.get("http://localhost:4002/todos");
    console.log("response", response.data);

    // toolkit에서 제공하는 API
    // Promist => resolve(= 네트워크 요청이 성공한 경우) => dispatch 해주는 기능을 가진 API
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    console.log("error", error);

    // toolkit에서 제공하는 API
    return thunkAPI.rejectWithValue(error);
  }
});

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [__getTodos.pending]: (state, action) => {
      // 아직 진행중일 때
      state.isLoding = true;
      state.isError = false;
    },
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoding = false;
      state.isError = false;
      // todos의 state로 들어감
      state.todos = action.payload;
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoding = false;
      state.isError = true;
      // 에러 객체를 갱신
      state.error = action.payload;
    },
  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;
