
import { Auth, DataStore, Predicates, withSSRContext } from "aws-amplify";
import { Order, User } from "../../../models";
import userService from "../user/userService";

  

const getAllOrders = async () => {
    try
    {
      const Users = []
      const orderRes = await DataStore.query(Order, Predicates.ALL)
      for (let user of orderRes)
      {
        Users.push(user.userID)
      }

      const usersWithOrders = await userService.getUsersById(Users)
      
      const res = orderRes.map((order: any) => {
        let modOrder = {}
        for (let user of usersWithOrders)
        {
          if (user.id === order.userID)
          {
            modOrder = { ...order, "username": user.firstName+" "+user.lastName }
          }
        }
        return modOrder
      })
        return res
    } catch (err)
    {
        console.log(err);
        throw err
    }
}

const placeOrder = async (items:any) => {
    try
    {
        const data = await DataStore.save(new Order(items))
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
    // console.log(filter);
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
  deleteOrders,
    placeOrder
}

export default orderService