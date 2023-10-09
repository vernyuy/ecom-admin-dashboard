"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface counterState {
  value: number;
}

const initialState: counterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      console.log(state.value);
      state.value += 1;
    },
    decrement: (state) => {
      console.log("Dackkko");
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
