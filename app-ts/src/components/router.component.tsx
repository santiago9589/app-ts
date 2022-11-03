import { useSelector } from 'react-redux';
import { Outlet, Navigate } from "react-router-dom"
import { AppStore } from '../redux/store';
import { routePublic} from "../models/routes"


export const RouterComponent = () => {
    const id = useSelector((state: AppStore) => state.user.user.id)
    console.log(id)
    if (!id) {
         return <Navigate replace to={routePublic.LOGIN}/>   
    }
    return <Outlet />;
}


