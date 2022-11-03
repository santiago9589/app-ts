

interface InputProps {
    name: string
    placeholder: string
    type: string
    errorInput:string | undefined
    onChange: (e: React.ChangeEvent<any>)=>void
    value: string | undefined
    onTouched:boolean | undefined
}


export const Input = ({ name, errorInput,onTouched, ...rest }: InputProps) => {
    return (
        <>
            <label  className="todo-form-label"htmlFor={name}>Ingrese su {name}</label>
            <input
                name={name}
                {...rest} 
                className="todo-form-input"/>
            {errorInput && onTouched && <div
            className= "todo-error-div">{errorInput}</div>}
        </>
    )
}
export default Input