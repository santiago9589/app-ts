import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/user";


export interface initialUserProps {
    user: User,
    errors: string
    isLoading:boolean
    
}


const initialUser: initialUserProps = {
    user: {
        email: "",
        displayName: "",
        password: ""
    },

    errors: "",
    isLoading:false
}

const userSlice = createSlice({
    name: "user",
    initialState: initialUser,
    reducers: {
        registerTodoStart: (state, actions) => {
            return {
                ...state,
                isLoading: true,
                errors: "",
            }
        },
        registerTodoSucces: (state) => {
            return {
                ...state,
                isLoading: false,
                errors: "",
            }
        },
        registerTodoFail: (state, actions) => {
            return {
                ...state,
                errors:actions.payload,
                isLoading: false
            }
        },


        loginTodoStart: (state, actions) => {
                
            return {
                ...state,
                isLoading: true,
                errors: "",
            }
        },
        loginTodoSucces: (state) => {
            
            return {
                ...state,
                isLoading: false,
                errors: "",
            }
        },
        loginTodoFail: (state, actions) => {
            
            return {
                ...state,
                errors:actions.payload,
                isLoading: false
            }
        },
        setUserApp: (state, actions) => {
            return {
                ...state,
               user:actions.payload
            }
        },
        logoutTodoStart: (state) => {
            return {
                ...state,
                isLoading: true,
            }
        },
        logoutTodoSucces: (state) => {
            return {
                ...state,
                isLoading: false,
            }
        },
        logoutTodoFail: (state, actions) => {
            
            return {
                ...state,
                errors:actions.payload,
                isLoading: false
            }
        },
        
    }
})


export const { setUserApp,loginTodoStart,loginTodoFail,loginTodoSucces,
registerTodoFail,registerTodoStart,registerTodoSucces,logoutTodoFail,logoutTodoStart,logoutTodoSucces } = userSlice.actions

export default userSlice.reducer




//login 

