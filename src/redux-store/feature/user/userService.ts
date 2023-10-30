
import { Auth, DataStore, withSSRContext } from "aws-amplify";
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
  
const userService = {
    getAllUsers
}

export default userService