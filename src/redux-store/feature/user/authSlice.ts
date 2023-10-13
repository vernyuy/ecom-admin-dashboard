"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userData, signinUserData, confirmUserData } from "@/src/types/types";
import authService from "./authService";

export const signin = createAsyncThunk(
  "auth/signin",
  async (user: signinUserData, thunkApi) => {
    try {
      return await authService.signin(user);
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
      return await authService.signup(user);
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
export const confirmUser = createAsyncThunk(
  "auth/confirmUser",
  async (user: confirmUserData, thunkApi) => {
    try {
     return await authService.confirmUser(user);
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

export const googleSignIn = createAsyncThunk(
  'auth/googleSignin',
  async (user:any, thunkApi) => {
    try {
      return await authService.googleSignIn();
    } catch (err: any) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      console.log(err);
      return thunkApi.rejectWithValue(message);
    }
  }
)
const initialState: any = {
    user: Map,
    isLoggedIn: false,
    errorMsg: '',
    isLoading: false,
    isSuccess: false,
    isError: false

}

export const authSlice: any = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.user = Map,
      state.isLoggedIn = false,
    state.errorMsg =  '',
    state.isLoading = false,
    state.isSuccess = false,
    state.isError = false
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
        state.isSuccess = true
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
        state.isError = false
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isSuccess = true;
        state.errorMsg = '';
        state.isLoading = false;
        state.isLoggedIn = false;
        state.isError = false
    })

    .addCase(signup.rejected, (state, action)=>{
        state.user = null,
        state.isLoading = false,
        state.isLoggedIn = false,
        state.errorMsg = action.payload as string,
        state.isError = true
    })

    .addCase(confirmUser.pending, (state, action) => {
      state.user = null;
      state.isLoggedIn = false;
      state.errorMsg = "";
      state.isLoading = true;
      state.isError = false
    })
    .addCase(confirmUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isSuccess = true;
      state.errorMsg = '';
      state.isLoading = false;
      state.isLoggedIn = false;
      state.isError = false
  })
  .addCase(confirmUser.rejected, (state, action)=>{
      state.user = null,
      state.isLoading = false,
      state.isLoggedIn = false,
      state.errorMsg = action.payload as string,
      state.isError = true
  })

    .addCase(googleSignIn.pending, (state, action) => {
      state.user = null;
      state.isLoggedIn = false;
      state.errorMsg = "";
      state.isLoading = true;
      state.isError = false
    })
    .addCase(googleSignIn.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isSuccess = true;
      state.errorMsg = '';
      state.isLoading = false;
      state.isLoggedIn = false;
      state.isError = false
  })
  .addCase(googleSignIn.rejected, (state, action)=>{
      state.user = null,
      state.isLoading = false,
      state.isLoggedIn = false,
      state.errorMsg = action.payload as string,
      state.isError = true
  })
  }
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
