import { DataStore, Predicates } from "aws-amplify";
import { Category} from "../../../models";
import { productData } from "@/src/types/types";

const listCategories = async () => {
    try {
      const categoryResult = await DataStore.query(Category, Predicates.ALL);
      return { success: true, result: categoryResult };
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const categoryService = {
    listCategories,
  };
  
  export default categoryService;