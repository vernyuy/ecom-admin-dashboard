import { DataStore, Predicates } from "aws-amplify";
import { Category, Product } from "../../../models";
import { productData } from "@/src/types/types";
const createProduct = async (product: productData) => {
  try {
    const productResult = await DataStore.save(new Product(product));
    return { success: true, result: productResult };
  } catch (error) {
    return { success: false, result: error };
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
const listProduct = async (productId: any) => {
  try {
    const product = await DataStore.query(Product, productId);
    return { success: true, result: product };
  } catch (error) {
    console.log(error);
    return { success: false, result: error };
  }
};

const getProductById = async (id: string) => {
  try {
    const productResult = await DataStore.query(Product, id);
    console.log(productResult);
    return { success: true, result: productResult };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteProducts = async (product: any) => {
  try {
    console.log(product);
    typeof product !== "string"
      ? product?.map(async (p: string) => {
          await DataStore.delete(Product, p);
        })
      : await DataStore.delete(Product, product);
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
    console.log(filter);
    const filterBy = filter.filterBy ? filter.filterBy : filter;
    let productResult;
    switch (filterBy) {
      case "instock":
        productResult = await DataStore.query(Product, (product) =>
          product.inStock.eq(true),
        );
        break;
      case "sold":
        productResult = await DataStore.query(Product, (product) =>
          product.inStock.eq(false),
        );
        break;
      case "category":
        if (filter.isParent) {
          let cats;
          let categoryProducts;
          let prods: any[] = [];

          cats = await DataStore.query(Category, (cat) =>
            cat.parentCategoryId.eq(filter.category),
          );
          categoryProducts = await DataStore.query(Product, (prod) =>
            prod.categoryID.eq(filter.category),
          ).then((data) => data);
          for (let p of categoryProducts) {
            prods.push(p);
          }

          for (let cat of cats) {
            let test = await DataStore.query(Product, (prod) =>
              prod.categoryID.eq(cat.id),
            ).then((data) => data);
            for (let p of test) {
              prods.push(p);
            }
          }
          productResult = prods;
        } else {
          productResult = await DataStore.query(Product, (product) =>
            product.categoryID.eq(filter.category),
          );
        }
        break;
      case "search":
        productResult = await DataStore.query(Product, (product) =>
          product.or((p) => [
            p.name.contains(filter.search),
            p.description.contains(filter.search),
          ]),
        );
        break;

      default:
        productResult = await DataStore.query(Product, Predicates.ALL, {
          page: 0,
          limit: 10,
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

const updateProduct = async (product: any) => {
  try {
    const original: any = await DataStore.query(Product, product.id);
    console.log("original : ", original);
    const updatedProduct = await DataStore.save(
      Product.copyOf(original, (updated) => {
        updated.name = product.name;
        updated.price = product.price;
        updated.description = product.description;
        updated.productImage = product.productImage;
        updated.productImageUrls = product.productImageUrls;
        updated.quantity = product.quantity;
        updated.inStock = product.inStock;
        updated.categoryID = product.categoryID;
        updated.sizes = product.sizes;
        updated.colors = product.colors;
        updated.hasSizes = product.hasSizes;
        updated.hasColors = product.hasColors;
      }),
    );
    console.log("values : ", updatedProduct);
    return { success: true, result: updatedProduct };
  } catch (error) {
    console.log("values : ", error);
    return { success: false, result: error };
  }
};

const productService = {
  createProduct,
  listProducts,
  filterProducts,
  deleteProducts,
  updateProduct,
  listProduct,
  getProductById,
};

export default productService;
