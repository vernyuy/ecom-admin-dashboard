
import { Auth, DataStore, Predicates, withSSRContext } from "aws-amplify";
import { Order } from "../../../models";

const getAllOrders = async () => {
    try
    {
        const data = await DataStore.query(Order)
        return data
    } catch (err)
    {
        console.log(err);
        throw err
    }
}

const filterOrders = async (filter: any) => {
  try {
    // const filter
    console.log(filter);
    const filterBy = filter.filterBy ? filter.filterBy : filter;
    let userResult;
    switch (filterBy) {
      case "completed":
        userResult = await DataStore.query(Order, (order) =>
          order.orderStatus.eq(true),
        );
        break;
      case "pending":
        userResult = await DataStore.query(Order, (order) =>
          order.orderStatus.eq(false),
        );
        break;

      default:
        userResult = await DataStore.query(Order, Predicates.ALL, {
          page: 0,
          limit: 10,
        });
        break;
    }
    return { success: true, result: userResult };
  } catch (error) {
    console.log(error);
    throw error;
  }
};


const deleteOrders = async (order: any) => {
  try {
    console.log(order);
    typeof order !== "string"
      ? order?.map(async (p: string) => {
          await DataStore.delete(Order, p);
        })
      : await DataStore.delete(Order, order);
    const orderResult = await DataStore.query(Order, Predicates.ALL);
    return { success: true, result: orderResult };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
  
const orderService = {
    getAllOrders,
    filterOrders,
    deleteOrders
}

export default orderService