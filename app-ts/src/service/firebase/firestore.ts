import { db } from "./config";
import { getDocs, addDoc, collection, deleteDoc, doc, setDoc } from "firebase/firestore"
import { Todo } from "../../models/todo";
import { adaptorGetData } from "../../adaptors/adaptor.getData";
import { TodoAd } from "../../models/todoAd";

interface errorsProps {
    name: string,
    code: string,
    message: string
}


export const getData = async () => {
    try {
        const response = await getDocs(collection(db, "todos"))
        const data = adaptorGetData(response)
        return data

    } catch (error: any) {
        throw new Error(error.message)
    }
}


export const addData = async (todo:TodoAd) => {
    try {
        await addDoc(collection(db, "todos"), todo)

    } catch (error: any) {
        throw new Error(error.message)
    }
}

export const deleteData = async (id:string) => {
    try {
        await deleteDoc(doc(db, "todos", id))
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export const modifyData = async (todo: Todo) => {
    
    try {
        await setDoc(doc(db, "todos", todo.id), {
            name: todo.name,
            description:todo.description
        });
    } catch (error: any) {
        throw new Error(error.message)
    }
}