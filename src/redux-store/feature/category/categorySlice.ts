import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productData } from "@/src/types/types";
import categoryService from "./categoryService";

const initialState: any = {
    categories: [],
    product: Map,
    errorMsg: "",
    isLoading: false,
    isCompleted: false,
  };
export const listCategories = createAsyncThunk("store/listCategories", async () => {
    try {
      const test = await categoryService.listCategories();
      console.log(test);
      return test.result;
    } catch (err: any) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      console.log(err);
    }
  });


  
export const categorySlice: any = createSlice({
    name: "category",
    initialState,
    reducers: {
      reset: (state) => {
        initialState;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(listCategories.pending, (state) => {
          state.categories = null;
          state.isLoading = true;
          state.errorMsg = "";
        })
        .addCase(listCategories.fulfilled, (state, action) => {
          // console.log(action);
          state.categories = action.payload;
          state.errorMsg = "";
          state.isLoading = false;
          // localStorage.setItem("products", JSON.stringify(action.payload))
        })
        .addCase(listCategories.rejected, (state, action) => {
          state.categories = null;
          state.isLoading = false;
          state.errorMsg = action.payload as string;
        })
        
    },
  });
  
  export const { reset } = categorySlice.actions;
  export default categorySlice.reducer;