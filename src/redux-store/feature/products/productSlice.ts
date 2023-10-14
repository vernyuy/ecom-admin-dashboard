import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productData } from "@/src/types/types";
import productService from "./productService";
const initialState: any = {
  products: [],
  product: Map,
  errorMsg: "",
  isLoading: false,
  isCompleted: false,
};
export const createProduct = createAsyncThunk(
  "store/createProduct",
  async (product: productData, thunkApi) => {
    try {
      return await productService.createProduct(product);
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

export const listProducts = createAsyncThunk("store/listProducts", async () => {
  try {
    const test = await productService.listProducts();
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

export const filterProduct = createAsyncThunk("store/filter", async (filterby: any) => {
  try {
    const test = await productService.filterProducts(filterby);
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


export const productSlice: any = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: (state) => {
      initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state) => {
        state.product = null;
        state.isLoading = true;
        state.errorMsg = "";
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.errorMsg = "";
        state.isLoading = false;
        state.isCompleted = true;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.product = null;
        state.isLoading = false;
        state.errorMsg = action.payload as string;
      })

      .addCase(listProducts.pending, (state) => {
        state.products = null;
        state.isLoading = true;
        state.errorMsg = "";
      })
      .addCase(listProducts.fulfilled, (state, action) => {
        // console.log(action);
        state.products = action.payload;
        state.errorMsg = "";
        state.isLoading = false;
        // localStorage.setItem("products", JSON.stringify(action.payload))
      })
      .addCase(listProducts.rejected, (state, action) => {
        state.products = null;
        state.isLoading = false;
        state.errorMsg = action.payload as string;
      })

      .addCase(filterProduct.fulfilled, (state, action) => {
        // console.log(action);
        state.products = action.payload;
        state.errorMsg = "";
        state.isLoading = false;
        // localStorage.setItem("products", JSON.stringify(action.payload))
      })
      
  },
});

export const { reset, filterOutStock } = productSlice.actions;
export default productSlice.reducer;
