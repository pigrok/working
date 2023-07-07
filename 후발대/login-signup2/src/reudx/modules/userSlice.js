import { createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";

export const userSlice = createSlice({
  name: "user",
  initialState: [
    {
      id: shortid.generate(),
      email: "1@1.1",
      password: "1234",
      userName: "피그록",
      isLogin: false,
    },
  ],
  reducers: {
    // key value pair
    login: (state, action) => {
      return state.map((user) => {
        if (user.email === action.payload.email && user.password === action.payload.password) {
          return {
            ...user,
            isLogin: !user.isLogin,
          };
        }
      });
    },
    signup: (state, action) => {
      const newUser = {
        id: shortid.generate(),
        email: action.payload.email,
        password: action.payload.password,
        userName: action.payload.name,
        isLogin: false,
      };
    },
    logout: (state, action) => {
      return state.map((user) => {
        if (user.id === action.payload) {
          return { ...user, isLogin: false };
        } else {
          return user;
        }
      });
    },
  },
});

export const { login, signup, logout } = userSlice.actions;
export default userSlice.reducer;
