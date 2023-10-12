"use client";

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./feature/user/authSlice";
import counterSlice from "./feature/counter/counterSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    counter: counterSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
