
import { configureStore } from '@reduxjs/toolkit'
import todosSlice from "../redux/state/todo"
import userSlice, { initialUserProps } from "../redux/state/user"
import {initialTodosProps} from "../redux/state/todo"
import createSagaMiddleware from "redux-saga";
import  rootSaga  from "./sagas/root.saga";
import { sagaWatcherRegister } from './sagas/sagas.register';

export interface AppStore{
    state : initialTodosProps
    user:initialUserProps
}

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore<AppStore>({
    reducer:{
        state: todosSlice,
        user :userSlice
    },
    middleware:[sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

