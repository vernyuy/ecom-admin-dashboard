"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productData } from "@/src/types/types";
import productService from "./productService";
const initialState: any = {
  products: [],
  product: Map,
  isLoggedIn: false,
  errorMsg: '',
  isLoading: false,
  isSuccess: false
};

export const createProduct = createAsyncThunk(
  "store/product",
  async (product: productData, thunkApi) => {
    try {
      await productService.createProduct(product);
    } catch (err: any) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      console.log(err);
      return thunkApi.rejectWithValue(message);
    }
  },
);

export const productSlice: any = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: (state) => {
      initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state) => {
        state.product = null;
        state.isLoading = true;
        state.errorMsg = "";
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.errorMsg = "";
        state.isLoading = false;
      })
      .addCase(createProduct.rejected, (state, action) => {
        (state.product = null),
          (state.isLoading = false),
          (state.errorMsg = action.payload as string);
      });
  },
});

export const { reset } = productSlice.actions;
export default productSlice.reducer;
