import { DataStore } from "aws-amplify";
import { Product } from "../../../models";
import { productData } from "@/src/types/types";
const createProduct = async (product: productData) => {
  try {
    const productResult = DataStore.save(new Product(product));
    return { success: true, result: productResult };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const productService = {
  createProduct,
};

export default productService;
