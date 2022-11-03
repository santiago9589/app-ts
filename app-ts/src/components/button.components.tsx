interface ButtonInput{
  name:string
}

const ButtonSubmit = ({name}:ButtonInput) => {
  return (
    <button type="submit" className="todo-button-submit">{name}</button>
  )
}

export default ButtonSubmit