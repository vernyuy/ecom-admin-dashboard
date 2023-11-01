
import { Auth, DataStore, Predicates, withSSRContext } from "aws-amplify";
import { User, UserType } from "../../../models";
import {confirmUserData, signinUserData, userData} from "@/src/types/types"
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';

const getAllUsers = async () => {
    try
    {
        const data = await DataStore.query(User)
        return data
    } catch (err)
    {
        console.log(err);
        throw err
    }
}

const filterUsers = async (filter: any) => {
  try {
    // const filter
    console.log(filter);
    const filterBy = filter.filterBy ? filter.filterBy : filter;
    let userResult;
    switch (filterBy) {
      case "active":
        userResult = await DataStore.query(User, (user) =>
          user.isActive.eq(true),
        );
        break;
      case "blocked":
        userResult = await DataStore.query(User, (user) =>
          user.isActive.eq(false),
        );
        break;
        case "category":
            let customers = []
            const users = await DataStore.query(User);
            userResult = users.filter(user => {
                const country = JSON.stringify(user.address)
                if(JSON.parse(country).coutry === filter.country) return user
            })
            break;
        case "search":
            userResult = await DataStore.query(User, (user) =>
                user.or(user => [
                    user.firstName.contains(filter.search.toLowerCase()),
                    user.lastName.contains(filter.search.toLowerCase())
  ]),
        );
        break;

      default:
        userResult = await DataStore.query(User, Predicates.ALL, {
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


const deleteUsers = async (user: any) => {
  try {
    console.log(user);
    typeof user !== "string"
      ? user?.map(async (p: string) => {
          await DataStore.delete(user, p);
        })
      : await DataStore.delete(User, user);
    const userResult = await DataStore.query(User, Predicates.ALL);
    return { success: true, result: userResult };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
  
const userService = {
    getAllUsers,
    filterUsers,
    deleteUsers
}

export default userService