"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userData, signinUserData, confirmUserData } from "@/src/types/types";
import userService from "./userService";

export const listUsers = createAsyncThunk(
  "user/listUsers",
  async (user: null, thunkApi) => {
    try {
      const res = await userService.getAllUsers();
      console.log(res)
      return res
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


export const filterUsers = createAsyncThunk(
  "store/filter",
  async (filterby: any) => {
    try {
      const res = await userService.filterUsers(filterby);
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

export const deleteUsers = createAsyncThunk(
  "user/deleteUsers",
  async (filterby: any) => {
    try {
      const res = await userService.deleteUsers(filterby);
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

export const blockUsers = createAsyncThunk(
  "user/blockUsers",
  async (user: any) => {
    try {
      const res = await userService.blockUser(user);
      return res?.result;
    } catch (err: any) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      console.log(err);
    }
  },
);

export const unBlockUsers = createAsyncThunk(
  "user/unBlockUsers",
  async (user: any) => {
    try {
      const res = await userService.unBlockUser(user);
      return res?.result;
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
    
    .addCase(filterUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.errorMsg = "";
        state.isLoading = false;
    })
    
    .addCase(deleteUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.errorMsg = "";
        state.isLoading = false;
    })
    
    .addCase(blockUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.errorMsg = "";
        state.isLoading = false;
      })

    .addCase(unBlockUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.errorMsg = "";
        state.isLoading = false;
      })
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
