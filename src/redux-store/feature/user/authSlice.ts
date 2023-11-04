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

export const currentUser = createAsyncThunk(
  "auth/currentUser",
  async (user, thunkApi) => {
    try {
      return await authService.currentUser();
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
  "auth/googleSignin",
  async (user: any, thunkApi) => {
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
  },
);

export const updateGoogleUser = createAsyncThunk(
  "auth/googleUpdate",
  async (user: any, thunkApi) => {
    try {
      return await authService.updateGoogleUser(user.id, user.data);
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


export const resendCode = createAsyncThunk(
  "auth/resendCode",
  async (email: string, thunkApi) => {
    try {
      return await authService.resendCode(email);
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

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (email: string, thunkApi) => {
    try {
      return await authService.forgotPassword(email);
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

export const forgotPasswordSubmit = createAsyncThunk(
  "auth/forgotPasswordSubmit",
  async (newData: any, thunkApi) => {
    try {
      return await authService.forgotPasswordSubmit(newData.email, newData.code, newData.password);
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

export const signOut = createAsyncThunk(
  "auth/signOut",
  async (user: null, thunkApi) => {
    try {
      return await authService.logOut();
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

export const savegoogleUse = createAsyncThunk(
  "auth/savegoogleUse",
  async (user: any, thunkApi) => {
    try {
      return await authService.saveGoogleUser(user);
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

export const getUserbyMail = createAsyncThunk(
  "auth/getUserbyEmail",
  async (userEmail: string, thunkApi) => {
    try {
      return await authService.getUserByEmail(userEmail);
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
  isSuccess: false,
  isError: false,
  isGoogle: false,
  issentCode: false,
  isLoadingGoogle: false,
  userData:[],
  userDetails:[]
};

export const authSlice: any = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      (state.user = Map),
        (state.isLoggedIn = false),
        (state.errorMsg = ""),
        (state.isLoading = false),
        (state.isSuccess = false),
        (state.isError = false);
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
        state.isSuccess = true;
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
        state.isError = false;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isSuccess = true;
        state.errorMsg = "";
        state.isLoading = false;
        state.isLoggedIn = false;
        state.isError = false;
      })
      .addCase(signup.rejected, (state, action) => {
        (state.user = null),
          (state.isLoading = false),
          (state.isLoggedIn = false),
          (state.errorMsg = action.payload as string),
          (state.isError = true);
      })

      .addCase(confirmUser.pending, (state, action) => {
        state.user = null;
        state.isLoggedIn = false;
        state.errorMsg = "";
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(confirmUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isSuccess = true;
        state.errorMsg = "";
        state.isLoading = false;
        state.isLoggedIn = false;
        state.isError = false;
      })
      .addCase(confirmUser.rejected, (state, action) => {
        (state.user = null),
          (state.isLoading = false),
          (state.isLoggedIn = false),
          (state.errorMsg = action.payload as string),
          (state.isError = true);
      })

      .addCase(googleSignIn.pending, (state, action) => {
        state.user = null;
        state.isLoggedIn = false;
        state.errorMsg = "";
        state.isLoading = true;
        state.isGoogle = true;
        state.isError = false;
        state.isLoadingGoogle = true;
      })
      .addCase(googleSignIn.fulfilled, (state, action) => {
        state.user = action.payload;
        state.errorMsg = "";
        state.isLoading = false;
        state.isLoggedIn = false;
        state.isGoogle = false;
        state.isError = false;
      })
      .addCase(googleSignIn.rejected, (state, action) => {
        (state.user = null),
          (state.isLoading = false),
          (state.isLoggedIn = false),
          (state.errorMsg = action.payload as string),
          (state.isError = true);
          state.isGoogle = false
      })

      .addCase(currentUser.pending, (state, action) => {
        state.user = null;
        state.isLoggedIn = false;
        state.errorMsg = "";
        state.isLoading = true;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.isLoggedIn = true;
        state.errorMsg = "";
        state.isLoading = false;
        state.isSuccess = true;
        console.log(state.user)
      })
      .addCase(currentUser.rejected, (state, action) => {
        (state.user = null),
          (state.isLoading = false),
          (state.isLoggedIn = false),
          (state.errorMsg = action.payload as string);
      })

      .addCase(updateGoogleUser.pending, (state, action) => {
        state.user = null;
        state.isLoggedIn = false;
        state.errorMsg = "";
        state.isLoading = true;
      })
      .addCase(updateGoogleUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.errorMsg = "";
        state.isLoading = false;
        state.isSuccess = true;
        console.log(state.user)
      })
      .addCase(updateGoogleUser.rejected, (state, action) => {
        (state.user = null),
          (state.isLoading = false),
          (state.isLoggedIn = false),
          (state.errorMsg = action.payload as string);
      })
      
      .addCase(resendCode.pending, (state, action) => {
        state.errorMsg = "";
        state.isLoading = true
        state.issentCode = true
      })
      .addCase(resendCode.fulfilled, (state, action) => {
        state.errorMsg = "";
        state.isLoading = false;
        state.isSuccess = true;
        state.issentCode = true;
      })
      .addCase(resendCode.rejected, (state, action) => {
          (state.isLoading = false),
          (state.isLoggedIn = false),
          state.issentCode = false;
          console.log(action.payload);
          state.errorMsg = action.payload;
      })

      .addCase(forgotPassword.pending, (state, action) => {
        state.errorMsg = "";
        state.isLoading = true
        state.issentCode = true
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        console.log("forgot")
        state.errorMsg = "";
        state.isLoading = false;
        state.isSuccess = true;
        state.issentCode = true;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
          (state.isLoading = false),
          (state.isLoggedIn = false),
          state.issentCode = false;
          console.log(action.payload);
          state.errorMsg = action.payload;
      })


      .addCase(forgotPasswordSubmit.pending, (state, action) => {
        state.errorMsg = "";
        state.isLoading = true
        state.issentCode = true
      })
      .addCase(forgotPasswordSubmit.fulfilled, (state, action) => {
        console.log("forgot confimr")
        state.errorMsg = "";
        state.isLoading = false;
        state.isSuccess = true;
        state.issentCode = true;
      })
      .addCase(forgotPasswordSubmit.rejected, (state, action) => {
          (state.isLoading = false),
          (state.isLoggedIn = false),
          state.issentCode = false;
          console.log(action.payload);
          state.errorMsg = action.payload;
      })

      .addCase(savegoogleUse.rejected, (state, action) => {
          (state.isLoading = false),
          (state.isLoggedIn = false),
          (state.errorMsg = action.payload as string);
      })
      .addCase(savegoogleUse.pending, (state, action) => {
        state.isLoggedIn = false;
        state.errorMsg = "";
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(savegoogleUse.fulfilled, (state, action) => {
        state.user = null;
        state.isSuccess = true;
        state.errorMsg = "";
        state.isLoading = false;
        state.isLoggedIn = false;
        state.isError = false;
      })


      .addCase(getUserbyMail.rejected, (state, action) => {
          (state.isLoading = false),
          (state.isLoggedIn = false),
          (state.errorMsg = action.payload as string);
      })
      .addCase(getUserbyMail.pending, (state, action) => {
        state.isLoggedIn = false;
        state.errorMsg = "";
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getUserbyMail.fulfilled, (state, action) => {
        console.log(action.payload)
        state.userDetails = action.payload
        state.isSuccess = true;
        state.errorMsg = "";
        state.isLoading = false;
        state.isLoggedIn = false;
        state.isError = false;
      })

      .addCase(signOut.rejected, (state, action) => {
          (state.isLoading = false),
          (state.isLoggedIn = false),
          (state.errorMsg = action.payload as string);
      })
      .addCase(signOut.pending, (state, action) => {
        state.isLoggedIn = false;
        state.errorMsg = "";
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(signOut.fulfilled, (state, action) => {
        state.user = null;
        state.isSuccess = true;
        state.errorMsg = "";
        state.isLoading = false;
        state.isLoggedIn = false;
        state.isError = false;
      })
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
