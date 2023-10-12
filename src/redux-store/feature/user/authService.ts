
import { Auth } from "aws-amplify";
import { DataStore } from 'aws-amplify';
import { User, UserType } from "../../../models";
import {signinUserData, userData} from "@/src/types/types"

const signup = async (user: userData)=>{
  const newUser = {...user, userType: UserType.ADMIN, isActive: true, address: "{\"town\":\"Douala\"}"}
    try{
        console.log("signing up")
         const test1 = await Auth.signUp({
          username: user.email,
            password: user.password,
            attributes:{
              email: user.email,
              address: "address"
            },
        }).then((data: any)=>{
          console.log(data)
          const createUserResult = DataStore.save(
            new User(newUser)
        )
        console.log(createUserResult)
        })  
        
    }catch(error){
        console.log(error)
        throw error
    }
}

const signin = async (user: signinUserData)=>{
  console.log("Hello")
    try {
      const data = await Auth.signIn(user.email, user.password)
          return data
      } catch (error) {
        throw error
      }
}

const confirmUser = async (user: any) => {
    try {
      const res = await Auth.confirmSignUp(user.username, user.code);
      console.log(res);
      return res;
    } catch (error) {
      console.log('error confirming sign up', error);
      throw error
    }
  }

  const resendCode = async (user: any) =>{
    try{
        const res = await Auth.resendSignUp(user.username)
        console.log(res, "code sent");
    }catch(err){
        console.log(err)
    }
  }

  const logOut = async() => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }
const authService = {
    signin,
    signup
}

export default authService