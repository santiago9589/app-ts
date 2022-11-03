import { User } from "../models/user"

export const adaptorUser = (user: any) => {
    
    const userAdapted = {
        email: user?.email || "",
        id: user?.uid || ""
    }


    return userAdapted
}