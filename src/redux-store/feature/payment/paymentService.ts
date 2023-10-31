
import { Auth, DataStore, Predicates, withSSRContext } from "aws-amplify";
import { Payment } from "../../../models";

const getAllPayments = async () => {
    try
    {
        const data = await DataStore.query(Payment)
        return data
    } catch (err)
    {
        console.log(err);
        throw err
    }
}

const filterPayments = async (filter: any) => {
  try {
    // const filter
    console.log(filter);
    const filterBy = filter.filterBy ? filter.filterBy : filter;
    let userResult;
    switch (filterBy) {
      case "completed":
        userResult = await DataStore.query(Payment, (pay) =>
          pay.paymentStatus.eq(true),
        );
        break;
      case "pending":
        userResult = await DataStore.query(Payment, (pay) =>
          pay.paymentStatus.eq(false),
        );
        break;

      default:
        userResult = await DataStore.query(Payment, Predicates.ALL, {
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


const deletePayments = async (pay: any) => {
  try {
    console.log(pay);
    typeof pay !== "string"
      ? pay?.map(async (p: string) => {
          await DataStore.delete(pay, p);
        })
      : await DataStore.delete(Payment, pay);
    const orderResult = await DataStore.query(Payment, Predicates.ALL);
    return { success: true, result: orderResult };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
  
const paymentService = {
    getAllPayments,
    filterPayments,
    deletePayments
}

export default paymentService