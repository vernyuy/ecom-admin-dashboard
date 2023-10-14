import { DataStore, Predicates } from "aws-amplify";
import { Category} from "../../../models";
import { productData } from "@/src/types/types";

const listCategories = async () => {
    console.log("hellooooooooo")
    try {
      const categoryResult = await DataStore.query(Category, Predicates.ALL);
      console.log(categoryResult)
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