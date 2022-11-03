import { Link } from 'react-router-dom'

interface LinkProps{
    name:string
    path:string
}

const LinkUnit = ({name,path}:LinkProps) => {
  return (
    <Link className="link-navbar"to={path}>
        {name}
    </Link>
  )
}

export default LinkUnit