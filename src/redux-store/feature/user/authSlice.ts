"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userData, signinUserData } from "@/src/types/types";
import authService from "./authService";

export const signin = createAsyncThunk(
  "auth/signin",
  async (user: signinUserData, thunkApi) => {
    try {
      await authService.signin(user);
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

export const signup = createAsyncThunk(
  "auth/signup",
  async (user: userData, thunkApi) => {
    try {
      await authService.signup(user);
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
  user: Map,
  isLoggedIn: false,
  errorMsg: "",
  isLoading: false,
};

export const authSlice: any = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signin.pending, (state, action) => {
        state.user = null;
        state.isLoggedIn = false;
        state.errorMsg = "";
        state.isLoading = true;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.errorMsg = "";
        state.isLoading = false;
      })
      .addCase(signin.rejected, (state, action) => {
        (state.user = null),
          (state.isLoading = false),
          (state.isLoggedIn = false),
          (state.errorMsg = action.payload as string);
      })

      .addCase(signup.pending, (state, action) => {
        state.user = null;
        state.isLoggedIn = false;
        state.errorMsg = "";
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.errorMsg = "";
        state.isLoading = false;
      })
      .addCase(signup.rejected, (state, action) => {
        (state.user = null),
          (state.isLoading = false),
          (state.isLoggedIn = false),
          (state.errorMsg = action.payload as string);
      });
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
