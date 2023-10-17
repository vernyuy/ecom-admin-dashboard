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

const getProductById = async (id: string) => {
  try {
    const productResult = await DataStore.query(Product, id);
    console.log(productResult)
    return { success: true, result: productResult };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteProducts = async (product: any) => {
  try {
    console.log(product)
    typeof product !== "string"? product?.map(async(p:string)=>{
      await DataStore.delete(Product, p);
    }): await DataStore.delete(Product, product);
    const productResult = await DataStore.query(Product, Predicates.ALL);
    return { success: true, result: productResult };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const filterProducts = async (filter: any) => {
  try {
    // const filter
    console.log(filter)
    const filterBy =  filter.filterBy?filter.filterBy: filter
    let productResult
    switch (filterBy) {
      case 'instock':
        productResult = await DataStore.query(Product, (product) => product.inStock.eq(true));
        break;
      case 'sold':
        productResult = await DataStore.query(Product, (product) => product.inStock.eq(false));
        break;
      case 'category':
        productResult = await DataStore.query(Product, (product) => product.categoryID.eq(filter.category));
        break;
      case 'search':
        productResult = await DataStore.query(Product, (product) => product.name.contains(filter.search.toLowerCase()));
        break;
    
      default:
        productResult = await DataStore.query(Product, Predicates.ALL, {
          page: 0,
          limit:10
        });
        break;
    }
    // const productResult = await DataStore.query(Product, (product) => product.inStock.eq(true));
    return { success: true, result: productResult };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const productService = {
  createProduct,
  listProducts,
  filterProducts,
  deleteProducts,
  getProductById
};

export default productService;
