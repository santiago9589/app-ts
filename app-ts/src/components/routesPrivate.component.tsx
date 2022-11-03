import { Navigate, Route, Routes } from 'react-router-dom'
import { routePrivates } from '../models/routes'
import CreateTodo from '../pages/createTodo/create.pages'
import EditTodo from '../pages/editTodo/edit.pages'
import HomePage from '../pages/homePage/HomePage'
import ListTodo from '../pages/listTodo/components/ListTodo.components.listTodo'


const RoutesPrivates = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={routePrivates.HOME} />} />
            <Route path={routePrivates.HOME} element={<HomePage />} />
            <Route path={routePrivates.LIST} element={<ListTodo />} />
            <Route path={routePrivates.ADD} element={<CreateTodo />} />
            <Route path={`${routePrivates.EDIT}/:id`}element={<EditTodo />} />
        </Routes>
    )
}

export default RoutesPrivates
