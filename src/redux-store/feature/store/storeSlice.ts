import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import storeService from "./storeService";

const initialState: any = {
    carousels: [],
    errorMsg: "",
    isLoading: false,
    isCompleted: false,
  };
export const listCarousel = createAsyncThunk("store/carousel", async () => {
    try {
      const res = await storeService.listCarousel();
      return res.result;
    } catch (err: any) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      console.log(err);
    }
});

export const createCarousel = createAsyncThunk("store/carouselCreate", async (data:any) => {
    try {
      const res = await storeService.updateStatus(data);
      console.log(res);
      return res.result;
    } catch (err: any) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      console.log(err);
    }
});

export const updateCarousel = createAsyncThunk("store/carouselUpdate", async (data: any) => {
  console.log("updating status")
    try {
      const res = await storeService.updateStatus(data);
      // console.log(res);
      // return res.result;
    } catch (err: any) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      console.log(err);
    }
});
  
export const storeSlice: any = createSlice({
    name: "store",
    initialState,
    reducers: {
      reset: (state) => {
        initialState;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(listCarousel.pending, (state) => {
          state.carousels = null;
          state.isLoading = true;
          state.errorMsg = "";
        })
        .addCase(listCarousel.fulfilled, (state, action) => {
          console.log(action.payload)
          state.carousels = action.payload
          state.errorMsg = "";
          state.isLoading = false;
        })
        .addCase(listCarousel.rejected, (state, action) => {
          state.carousels = null;
          state.isLoading = false;
          state.errorMsg = action.payload as string;
        })
      
      .addCase(createCarousel.pending, (state) => {
          state.carousels = null;
          state.isLoading = true;
          state.errorMsg = "";
        })
        .addCase(createCarousel.fulfilled, (state, action) => {
          state.errorMsg = "";
          state.isLoading = false;
          state.isCompleted = true;
        })
        .addCase(createCarousel.rejected, (state, action) => {
          state.carousels = null;
          state.isLoading = false;
          state.errorMsg = action.payload as string;
        })
      
      .addCase(updateCarousel.pending, (state) => {
          // state.carousels = null;
          state.isLoading = true;
          state.errorMsg = "";
        })
        .addCase(updateCarousel.fulfilled, (state, action) => {
          // state.carousels = action.payload
          state.errorMsg = "";
          state.isLoading = false;
          state.isCompleted = true;
        })
        .addCase(updateCarousel.rejected, (state, action) => {
          // state.carousels = null;
          state.isLoading = false;
          state.errorMsg = action.payload as string;
        })


    },
  });
  
  export const { reset } = storeSlice.actions;
  export default storeSlice.reducer;