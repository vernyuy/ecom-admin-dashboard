"use client";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./feature/user/authSlice";
import productSlice from "./feature/products/productSlice";
import categorySlice from "./feature/category/categorySlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    product: productSlice,
    category: categorySlice,
    
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
