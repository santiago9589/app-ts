import { useSelector, useDispatch } from "react-redux"
import TitleComponent from "../../../components/title.component"
import { AppStore } from "../../../redux/store"
import THHeader from "./th.component.listTodo"
import TodoComponent from "./Todo.components.listTodo"
import { useEffect } from "react"
import todo, { getTodoStart } from "../../../redux/state/todo"
import SpinComponent from "../../../components/spin.components"



export const ListTodo = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTodoStart())
    }, [])


    const { todos, isLoading } = useSelector((state: AppStore) => state.state)


    return (
        <div className="table-container">

            <TitleComponent title="List of Todos" />
            {
                !isLoading && todos.length ? (
                    <table>
                        <thead>
                            <THHeader />
                        </thead>
                        <tbody>
                            {
                                (todos.map((todo, index) => {
                                    return (
                                        <TodoComponent key={index} todo={todo} />
                                    )
                                }))
                            }
                        </tbody>
                    </table>
                ) : (<SpinComponent/>)
            }

        </div>
    )
}

export default ListTodo

