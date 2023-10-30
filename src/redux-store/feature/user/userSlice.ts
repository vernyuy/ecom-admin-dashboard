"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userData, signinUserData, confirmUserData } from "@/src/types/types";
import userService from "./userService";

export const listUsers = createAsyncThunk(
  "auth/signin",
  async (user: null, thunkApi) => {
    try {
      return await userService.getAllUsers();
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

const initialState: any = {
    users: [],
  errorMsg: "",
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const userSlice: any = createSlice({
  name: "auth",
  initialState,
  reducers: {
      reset: (state) => {
          state.users = [],
        (state.errorMsg = ""),
        (state.isLoading = false),
        (state.isSuccess = false),
        (state.isError = false);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(listUsers.pending, (state, action) => {
        state.users = [];
        state.isLoggedIn = false;
        state.errorMsg = "";
        state.isLoading = true;
      })
        .addCase(listUsers.fulfilled, (state, action) => {
            console.log(action.payload);
        state.users = action.payload;
        state.errorMsg = "";
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(listUsers.rejected, (state, action) => {
        (state.users = []),
          (state.isLoading = false),
            (state.errorMsg = action.payload as string);
          state.isSuccess = false
      })
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
