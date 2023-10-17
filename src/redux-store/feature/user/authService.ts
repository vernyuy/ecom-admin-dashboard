
import { Auth } from "aws-amplify";
import { DataStore } from 'aws-amplify';
import { User, UserType } from "../../../models";
import {confirmUserData, signinUserData, userData} from "@/src/types/types"
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';

const signup = async (user: userData)=>{
  
    try{
         await Auth.signUp({
          username: user.email,
            password: user.password,
            attributes:{
              email: user.email,
              address: "address"
            },
        }).then((data: any)=>{
          console.log(data.userSub)
          const newUser = {...user, userType: UserType.ADMIN, isActive: true, sub:data.userSub, address: "{\"town\":\"Douala\"}"}
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
    try {
      
  console.log("Hello")
      const data = await Auth.signIn(user.email, user.password)
      console.log(data)
          return data
      } catch (error) {
        throw error
      }
}

const confirmUser = async (user: confirmUserData) => {
  console.log(`Confirm user :  ${user.email}`)
    try {
      const res = await Auth.confirmSignUp(user.email, user.code);
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

  const googleSignIn = async ()=>{
    try {
      await Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google }).then((data)=>{
        console.log("afssfgsfsfsf", data)
        return data
      })
    }catch(err){
      console.log(err)
    }
  }
const authService = {
    signin,
    signup,
    confirmUser,googleSignIn
}

export default authService