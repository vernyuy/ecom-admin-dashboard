"use client";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./feature/user/authSlice";
import productSlice from "./feature/products/productSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    product: productSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
