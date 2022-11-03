interface titleProps{
    title:string
}

export const TitleComponent = ({title}:titleProps) => {
  return (
    <h2 className="title">{title}</h2>
  )
}

export default TitleComponent