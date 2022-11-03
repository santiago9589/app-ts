import {auth} from "../firebase/config"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,updateProfile} from "firebase/auth"
import {User} from "../../models/user"



export const userRegisterEmailPass = async({email,displayName,password}:User) =>{
   
    try {
        const user = await createUserWithEmailAndPassword(auth,email,password)
        await updateProfile(user.user, {
            displayName: displayName
        })  
    } catch (error:any) {  
        throw new Error(error.message)
    }
}



export const userLoginEmailPass = async({email,password}:User) =>{
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (error:any) {  
        throw new Error(error.message)
    }
}


export const LogoutUser = async() =>{
    try {
        await signOut(auth)
    } catch (error:any) {  
        throw new Error(error.message)
    }
}