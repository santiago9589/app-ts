import CreateTodo from "./pages/createTodo/create.pages"
import Login from "./pages/login/login.pages"
import Register from "./pages/register/register.pages"
import EditTodo from "./pages/editTodo/edit.pages"
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom"
import ErrorPage from "./pages/errorPage/ErrorPage"
import ListTodo from "./pages/listTodo/components/ListTodo.components.listTodo"
import NavRouter from "./components/links.components"
import HomePage from "./pages/homePage/HomePage"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./service/firebase/config"
import { setUserApp } from "./redux/state/user"
import { useDispatch, useSelector } from "react-redux"
import { adaptorUser } from "./adaptors/adaptor.user"
import { useEffect, useState } from "react"
import { RouterComponent } from "./components/router.component"
import { routePrivates, routePublic } from "./models/routes"
import RoutesPrivates from "./components/routesPrivate.component"
import NavComponent from "./components/nav.component"
import VideoComponent from "./components/video.component"
import { RouterComponentExist } from "./components/router.component.exist"
import { RouterComponentError } from "./components/router.component.error"

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged((auth), (user) => {
      dispatch(setUserApp(adaptorUser(user)))
    })
  }, [])



  return (
    <>
      <BrowserRouter>
        <NavComponent />
        <Routes>
          <Route element={<RouterComponent />}>
            <Route path={`${routePrivates.PRIVATE}/*`} element={<RoutesPrivates />} />
          </Route>

       
            <Route path="/" element={<Navigate to={routePublic.LOGIN} />} />
            <Route path={routePublic.LOGIN} element={<Login />} />
            <Route path={routePublic.REGISTER} element={<Register />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>

      </BrowserRouter>
    </>

  )
}

export default App
