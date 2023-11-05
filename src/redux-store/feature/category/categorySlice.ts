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
  

export const deleteCategoriesFn = createAsyncThunk(
  "store/deleteCategories",
  async (category: any) => {
    try {
      const res = await categoryService.deleteCategory(category);
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

export const filterCategories = createAsyncThunk(
  "store/filtercat",
  async (filterby: any) => {
    try {
      const test = await categoryService.filterCategory(filterby);
      console.log(test);
      return test.result;
    } catch (err: any) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      console.log(err);
    }
  },
);

  
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
          state.categories = action.payload;
          state.errorMsg = "";
          state.isLoading = false;
        })
        .addCase(listCategories.rejected, (state, action) => {
          state.categories = null;
          state.isLoading = false;
          state.errorMsg = action.payload as string;
        })
      
      .addCase(deleteCategoriesFn.pending, (state) => {
          state.categories = null;
          state.isLoading = true;
          state.errorMsg = "";
        })
        .addCase(deleteCategoriesFn.fulfilled, (state, action) => {
          state.categories = action.payload;
          state.errorMsg = "";
          state.isLoading = false;
          state.isCompleted = true;
        })
        .addCase(deleteCategoriesFn.rejected, (state, action) => {
          state.categories = null;
          state.isLoading = false;
          state.errorMsg = action.payload as string;
        })
        
        .addCase(filterCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.errorMsg = "";
        state.isLoading = false;
      })

    },
  });
  
  export const { reset } = categorySlice.actions;
  export default categorySlice.reducer;