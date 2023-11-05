import { DataStore, Predicates } from "aws-amplify";
import { Category } from "../../../models";
import { categoryData } from "@/src/types/types";

const createProduct = async (category: categoryData) => {
  try {
    const createCategoryResult = await DataStore.save(new Category(category));
    return { success: true, result: createCategoryResult };
  } catch (error) {
    return { success: false, result: error };
  }
};

const listCategories = async () => {
  try {
    const categoryResult = await DataStore.query(Category, Predicates.ALL);
    return { success: true, result: categoryResult };
  } catch (error) {
    throw error;
  }
};

const updateCategory = async (category: any) => {
  try {
    const original: any = await DataStore.query(Category, category.id);
    const updatedCategory = await DataStore.save(
      Category.copyOf(original, (updated) => {
        updated.name = category.name;
        updated.description = category.description;
        updated.categoryImageUrl = category.categoryImageUrl;
        updated.parentCategoryId = category.parentCategoryId;
        updated.isParent = category.isParent;
      }),
    );
    return { success: true, result: updatedCategory };
  } catch (error) {
    return { success: false, result: error };
  }
};

const deleteCategory = async (product: any) => {
  console.log("Deleting category")
  try {
    console.log(product);
    typeof product !== "string"
      ? product?.map(async (p: string) => {
          await DataStore.delete(Category, p);
        })
      : await DataStore.delete(Category, product);
    const productResult = await DataStore.query(Category, Predicates.ALL);
    return { success: true, result: productResult };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const filterCategory = async (filter: any) => {
  try {
    // const filter
    console.log(filter);
    const filterBy = filter.filterBy ? filter.filterBy : filter;
    let catResult;
    switch (filterBy) {
      case "parent":
        catResult = await DataStore.query(Category, (cat) =>
          cat.isParent.eq(true),
        );
        break;
      case "not-parent":
        catResult = await DataStore.query(Category, (cat) =>
          cat.isParent.eq(false),
        );
        break;
      case "search":
        catResult = await DataStore.query(Category, (cat) =>
          cat.name.contains(filter.search.toLowerCase()),
        );
        break;

      default:
        catResult = await DataStore.query(Category, Predicates.ALL, {
          page: 0,
          limit: 10,
        });
        break;
    }
    return { success: true, result: catResult };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const categoryService = {
  listCategories,
  createProduct,
  updateCategory,
  deleteCategory,
  filterCategory
};

export default categoryService;
