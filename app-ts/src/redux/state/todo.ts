import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../models/todo";

export interface initialTodosProps {
    todos: Todo[],
    todoSelected: Todo[]
    errors: string
    isLoading: boolean
}

const initialTodoState: initialTodosProps = {
    todos: [],
    todoSelected: [{
        id: "",
        name: "",
        description: ""
    }],
    errors: "",
    isLoading: false
}

const todoSlice = createSlice({
    name: "todo",
    initialState: initialTodoState,
    reducers: {
        // get todo

        getTodoStart: (state) => {
            return {
                ...state,
                isLoading: true
            }
        }, getTodoSucces: (state, actions) => {
            return {
                ...state,
                isLoading: false,
                todos: actions.payload
            }
        }, getTodoFail: (state, actions) => {
            return {
                ...state,
                isLoading: false,
                errors: actions.payload
            }
        },

        // get todo

        // add todo

        addTodoStart: (state, actions) => {
            return {
                ...state,
                isLoading: true
            }
        }, addTodoSucces: (state) => {
            return {
                ...state,
                isLoading: false,
            }
        }, addTodoFail: (state, actions) => {
            return {
                ...state,
                isLoading: false,
                errors: actions.payload
            }
        },

        // add todo

        //set todo
        selectTodoSelected: (state, actions) => {
            return {
                ...state,
                isLoading: true,
                todoSelected: [...state.todos.filter((todo) => {
                    return todo.id === actions.payload
                })]
            }
        },
        setTodoStart: (state, actions) => {
            console.log(actions)
            return {
                ...state,
                isLoading: true,
            }
        }, setTodoSucces: (state) => {
            return {
                ...state,
                isLoading: false,
                todoSelected: [],
            }
        }, setTodoFail: (state, actions) => {
            return {
                ...state,
                isLoading: false,
                errors: actions.payload,
                todoSelected: []
            }
        },

        //set todo

        //delete todo

        deleteTodoStart: (state, actions) => {
            
            return {
                ...state,
                isLoading: true
            }
        }, deleteTodoSucces: (state, actions) => {
            
            return {
                ...state,
                isLoading: false,
            }
        }, deleteTodoFail: (state, actions) => {
            
            return {

                ...state,
                isLoading: false,
                errors: actions.payload
            }
        }

        //delete todo
    }
})


export const { getTodoFail, getTodoStart, getTodoSucces, addTodoFail, addTodoStart, addTodoSucces,

    setTodoFail, setTodoStart, selectTodoSelected, setTodoSucces, deleteTodoFail, deleteTodoStart, deleteTodoSucces } = todoSlice.actions

export default todoSlice.reducer


