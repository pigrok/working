import boardSlice from "../modules/boardSlice";
import userSlice from "../modules/userSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  // key value pair
  reducer: {
    userSlice: userSlice,
    boardSlice: boardSlice,
  },
});

export default store;
