import { NavigateFunction } from "react-router-dom"
import {NavigatePath} from "../utilities/cancel.utilites"

interface buttonNavigateProps{
  navigate: NavigateFunction
  pathRoute:string
  nameButton:string
}

const ButtonNavigate = ({navigate,pathRoute,nameButton}:buttonNavigateProps) => {

  return (
    <button className="todo-button-navigate"onClick={()=>{NavigatePath(navigate,pathRoute)}}>{nameButton}</button>
  )
}

export default ButtonNavigate