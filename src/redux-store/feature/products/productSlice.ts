import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productData } from "@/src/types/types";
import productService from "./productService";
const initialState: any = {
  products: [],
  product: Map,
  errorMsg: "",
  isLoading: false,
  isCompleted: false,
  updating: false,
  updateProductErrMsg: "",
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

export const listProduct = createAsyncThunk(
  "store/listProduct",
  async (productId: any) => {
    try {
      const listProduct = await productService.listProduct(productId);
      return listProduct.result;
    } catch (err: any) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      console.log(err);
    }
  },
);

export const updateProduct = createAsyncThunk(
  "store/updateProduct",
  async (product: productData) => {
    try {
      const updatedProduct = await productService.updateProduct(product);
      return updatedProduct.result;
    } catch (err: any) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      console.log(err);
    }
  },
);

export const listProducts = createAsyncThunk("store/listProducts", async () => {
  try {
    const listProducts = await productService.listProducts();
    return listProducts.result;
  } catch (err: any) {
    const message =
      (err.response && err.response.data && err.response.data.message) ||
      err.message ||
      err.toString();
    console.log(err);
  }
});

export const filterProduct = createAsyncThunk(
  "store/filter",
  async (filterby: any) => {
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
  },
);

export const deleteProductsFn = createAsyncThunk(
  "store/deleteProducts",
  async (filterby: any) => {
    try {
      const res = await productService.deleteProducts(filterby);
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

      .addCase(listProduct.pending, (state) => {
        state.product = null;
        state.isLoading = true;
        state.errorMsg = "";
      })
      .addCase(listProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.errorMsg = "";
        state.isLoading = false;
        state.isCompleted = true;
      })
      .addCase(listProduct.rejected, (state, action) => {
        state.product = null;
        state.isLoading = false;
        state.errorMsg = action.payload as string;
      })

      .addCase(updateProduct.pending, (state) => {
        state.uploading = true;
        state.updateProductErrMsg = "";
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.updateProductErrMsg = "";
        state.updating = false;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.updating = false;
        state.updateProductErrMsg = action.payload as string;
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
        state.products = action.payload;
        state.errorMsg = "";
        state.isLoading = false;
      })

      .addCase(deleteProductsFn.fulfilled, (state, action) => {
        state.products = action.payload;
        state.errorMsg = "";
        state.isLoading = false;
      });
  },
});

export const { reset, filterOutStock } = productSlice.actions;
export default productSlice.reducer;
