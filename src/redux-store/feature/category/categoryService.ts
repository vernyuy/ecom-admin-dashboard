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

const categoryService = {
  listCategories,
  createProduct,
  updateCategory,
};

export default categoryService;
