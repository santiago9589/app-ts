import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { routePrivates, routePublic } from '../models/routes'
import { logoutTodoStart } from "../redux/state/user"
import { AppStore } from "../redux/store"
import LinkUnit from "./link.component"

const NavRouter = () => {

    const id = useSelector((state: AppStore) => state.user.user.id)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logoutTodoStart())
        navigate(routePublic.LOGIN)
    }


    return (
        <nav className="todo-navbar"  >
            {
                id && <a className="link-navbar" onClick={handleLogout}>
                    LOGOUT
                </a>
            }
            <LinkUnit name="ADD" path={`${routePrivates.PRIVATE}${routePrivates.ADD}`} />
            <LinkUnit name="LIST" path={`${routePrivates.PRIVATE}${routePrivates.LIST}`} />
            <LinkUnit name="HOME" path={`${routePrivates.PRIVATE}${routePrivates.HOME}`} />
            {
                
                !id && (
                    <>
                        <LinkUnit name="LOGIN" path={routePublic.LOGIN} />
                        <LinkUnit name="REGISTER" path={routePublic.REGISTER} />
                    </>
                )
            }
        </nav>
    )
}

export default NavRouter
