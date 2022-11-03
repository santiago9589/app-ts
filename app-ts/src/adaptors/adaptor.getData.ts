import { DocumentData, QuerySnapshot } from "firebase/firestore";
import { Todo } from "../models/todo";


export const adaptorGetData = (todos: QuerySnapshot<DocumentData>) => {

    const arrayData: any[] = [];
    const TodosArr: Todo[] = []

    todos.forEach((doc) => {
        arrayData.push({
            id: doc.id,
            data: doc.data()
        })
    });

    arrayData.forEach((data: any) => {
        let idEnter = data.id
        let nameEnter = data.data.name
        let descriptionEnter = data.data.description
        

        let newTodo:Todo={
            id:idEnter,
            name:nameEnter,
            description:descriptionEnter
        }
  
        TodosArr.push(newTodo)
    })

    return TodosArr

}
