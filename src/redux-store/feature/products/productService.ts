import { DataStore, Predicates } from "aws-amplify";
import { Product } from "../../../models";
import { productData } from "@/src/types/types";
const createProduct = async (product: productData) => {
  try {
    const productResult = await DataStore.save(new Product(product));
    return { success: true, result: productResult };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const listProducts = async () => {
  try {
    const productResult = await DataStore.query(Product, Predicates.ALL);
    return { success: true, result: productResult };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const productService = {
  createProduct,
  listProducts,
};

export default productService;
