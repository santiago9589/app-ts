
interface FormProps{
    children:React.ReactNode
    onSubmit:()=>void
    
}

const FormComponent = ({children,onSubmit}:FormProps) => {
  return (
    <>
    <form className="todo-form" onSubmit={onSubmit}>
        {children}
    </form>
    </>
  )
}

export default FormComponent