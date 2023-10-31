"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userData, signinUserData, confirmUserData } from "@/src/types/types";
import paymentService from "./paymentService";

export const listPayments = createAsyncThunk(
  "user/listPayment",
  async (user: null, thunkApi) => {
    try {
      return await paymentService.getAllPayments();
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


export const filterPayment = createAsyncThunk(
  "store/filter",
  async (filterby: any) => {
    try {
      const res = await paymentService.filterPayments(filterby);
      // console.log(test);
      return res.result;
    } catch (err: any) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      console.log(err);
    }
  },
);

export const deletePayments = createAsyncThunk(
  "order/deleteorder",
  async (filterby: any) => {
    try {
      const res = await paymentService.deletePayments(filterby);
      return res.result;
    } catch (err: any) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      console.log(err);
    }
  },
);
const initialState: any = {
    payments: [],
  errorMsg: "",
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const paymentSlice: any = createSlice({
  name: "auth",
  initialState,
  reducers: {
      reset: (state) => {
          state.payments = [],
        (state.errorMsg = ""),
        (state.isLoading = false),
        (state.isSuccess = false),
        (state.isError = false);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(listPayments.pending, (state, action) => {
        state.payments = [];
        state.isLoggedIn = false;
        state.errorMsg = "";
        state.isLoading = true;
      })
        .addCase(listPayments.fulfilled, (state, action) => {
            console.log(action.payload);
        state.payments = action.payload;
        state.errorMsg = "";
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(listPayments.rejected, (state, action) => {
        (state.payments = []),
          (state.isLoading = false),
            (state.errorMsg = action.payload as string);
          state.isSuccess = false
      })
    
    .addCase(filterPayment.fulfilled, (state, action) => {
        state.payments = action.payload;
        state.errorMsg = "";
        state.isLoading = false;
    })
    
    .addCase(deletePayments.fulfilled, (state, action) => {
        state.payments = action.payload;
        state.errorMsg = "";
        state.isLoading = false;
      })

  },
});

export const { reset } = paymentSlice.actions;
export default paymentSlice.reducer;
