"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userData, signinUserData, confirmUserData } from "@/src/types/types";
import orderService from "./orderService";

export const listOrders = createAsyncThunk(
  "user/listOrder",
  async (user: null, thunkApi) => {
    try {
      return await orderService.getAllOrders();
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

export const placeOrder = createAsyncThunk(
  "user/placeOrder",
  async (item: any, thunkApi) => {
    try {
      return await orderService.placeOrder(item);
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


export const filterOrders = createAsyncThunk(
  "store/filter",
  async (filterby: any) => {
    try {
      const res = await orderService.filterOrders(filterby);
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

export const deleteOrders = createAsyncThunk(
  "order/deleteorder",
  async (filterby: any) => {
    try {
      const res = await orderService.deleteOrders(filterby);
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
    orders: [],
  errorMsg: "",
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const orderSlice: any = createSlice({
  name: "auth",
  initialState,
  reducers: {
      reset: (state) => {
          state.orders = [],
        (state.errorMsg = ""),
        (state.isLoading = false),
        (state.isSuccess = false),
        (state.isError = false);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(listOrders.pending, (state, action) => {
        console.log("helloe");
        state.orders = [];
        state.isLoggedIn = false;
        state.errorMsg = "";
        state.isLoading = true;
      })
        .addCase(listOrders.fulfilled, (state, action) => {
            console.log(action.payload);
        state.orders = action.payload;
        state.errorMsg = "";
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(listOrders.rejected, (state, action) => {
        console.log("hrrrrr");
        (state.orders = []),
          (state.isLoading = false),
            (state.errorMsg = action.payload as string);
          state.isSuccess = false
      })
    
    .addCase(filterOrders.fulfilled, (state, action) => {
        state.orders = action.payload;
        state.errorMsg = "";
        state.isLoading = false;
    })
    
    .addCase(deleteOrders.fulfilled, (state, action) => {
        state.orders = action.payload;
        state.errorMsg = "";
        state.isLoading = false;
    })
    
    .addCase(placeOrder.pending, (state, action) => {
        state.orders = [];
        state.isLoggedIn = false;
        state.errorMsg = "";
        state.isLoading = true;
      })
        .addCase(placeOrder.fulfilled, (state, action) => {
            console.log(action.payload);
        state.orders = action.payload;
        state.errorMsg = "";
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(placeOrder.rejected, (state, action) => {
        (state.orders = []),
          (state.isLoading = false),
            (state.errorMsg = action.payload as string);
          state.isSuccess = false
      })

  },
});

export const { reset } = orderSlice.actions;
export default orderSlice.reducer;
