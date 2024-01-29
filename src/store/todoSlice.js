import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "numbers1",
  initialState: {
    numbers: 0,
  },
  reducers: {
    increment(state) {
      state.numbers += 1;
    },
    reset(state) {
      state.numbers = 0;
    },
  },
});

export const { increment, reset } = todoSlice.actions;
export default todoSlice.reducer;