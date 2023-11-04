
import { Auth, DataStore, withSSRContext } from "aws-amplify";
import { User, UserType } from "../../../models";
import {confirmUserData, signinUserData, userData} from "@/src/types/types"
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
const signup = async (user: userData)=>{
    try{
         await Auth.signUp({
          username: user?.email,
            password: user?.password,
            attributes:{
              email: user.email,
              address: user.address
            },
        }).then((data: any)=>{
          const newUser = {...user, userType: UserType.CUSTOMER, isActive: true, sub:data.userSub}
          const createUserResult = DataStore.save(
            new User(newUser)
        )
        console.log(createUserResult)
        })  
        
    }catch(error){
        console.log(`Error registering user: ${error}`)
        throw error
    }
}

const signin = async (user: signinUserData)=>{
    try {
      const data = await Auth.signIn(user.email, user.password)
          return data
      } catch (error) {
        console.log(`Error signing user: ${error}`)
        throw error
      }

}

const confirmUser = async (user: confirmUserData) => {
    try {
      const res = await Auth.confirmSignUp(user.email, user.code);
      return res;
    } catch (error) {
      console.log('error confirming sign up', error);
      throw error
    }
  }

  const resendCode = async (email: string) =>{
    try{
        const res = await Auth.resendSignUp(email)
    }catch(error){
      console.log(`Error resending user confirmation code: ${error}`)
        throw error
    }
  }

  const currentUser = async () =>{
    try{
        const res = await Auth.currentAuthenticatedUser()
        return res
    }catch(err){
      console.log(`Error geting current user: ${err}`)
        throw err
    }
  }

    const updateGoogleUser = async (id: string, userLogin: any) =>{
    try{
        const res = await DataStore.query(User, id).then(async (original: any) => {
        const user = await DataStore.save(
          User.copyOf(original, updated => {
            updated.firstName = userLogin.firstName,
              updated.lastName = userLogin.lastName,
              updated.address = userLogin.address;
            updated.phone = userLogin.phoneNumber;
            updated.userType = 'CUSTOMER'
          })
        ).then((data) => {
          return data
        });
      })
        
    }catch(err){
      console.log(`Error geting current user: ${err}`)
        throw err
    }
  }

  const logOut = async() => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
      throw error
    }
  }

  const googleSignIn = async ()=>{
    const test = withSSRContext()
    try {
      const data = await test.Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google })
        return data
    }catch(err){
      console.log(`Error logging user with google: ${err}`)
      throw err
     }
  }

  const saveGoogleUser = async (userData: any)=>{
    try {
      const data = await DataStore.save(new User(userData));
        return data
    }catch(err){
      console.log(`Error logging user with google: ${err}`)
      throw err
     }
  }

    const getUserByEmail = async (userEmail: string)=>{
    try {
      const data = await DataStore.query(User, (user) =>
                user.email.eq(userEmail),
      )
      if (data.length > 0)
      {
        return data[0];
      } else
      {
        throw {message: "no user with this email"}
      }
    }catch(err){
      console.log(`Error logging user with google: ${err}`)
      throw err
     }
  }

  const changePaswsword = (user: any, oldPassword: string, newPassord: string) =>{
    try {
      const response = Auth.changePassword(user, oldPassword, newPassord)
      return response
    }catch(err){
      console.log(err)
      throw err
    }
  }

  
  const forgotPassword = async (email: string) =>{
    try {
      const result = await Auth.forgotPassword(email);
      return result
    } catch (error) {
      console.log(`Error sending forgot password code:${error}`)
      throw error
    }
  }

  const forgotPasswordSubmit = async (username: string, code: string, new_password: string) => {
    try {
      const result = await Auth.forgotPasswordSubmit(
        username,
        code,
        new_password
      );
      return { success: true, result: result };
    } catch (error) {
      console.log(`Error submiting new password: ${error}`)
      throw error
    }
  }

  
const authService = {
    signin,
    signup,
    confirmUser,
    googleSignIn, 
    currentUser,
    resendCode,
    logOut,
    forgotPassword,
    forgotPasswordSubmit, updateGoogleUser, saveGoogleUser,getUserByEmail
}

export default authService