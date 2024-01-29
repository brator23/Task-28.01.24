import { configureStore } from "@reduxjs/toolkit";
import numReducer from "./todoSlice";

export default configureStore({
  reducer: {
    numbers1: numReducer,
  },
});