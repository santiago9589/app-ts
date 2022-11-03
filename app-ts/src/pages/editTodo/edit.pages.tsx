import FormComponent from "../../components/form.component"
import { useFormik } from "formik"
import { validationSchema } from "./utilities/validationSchema.utilities.editTodo"
import { useNavigate } from "react-router-dom"
import Input from "../../components/input.components"
import ButtonSubmit from "../../components/button.components"
import { Todo } from "../../models/todo"
import { useDispatch, useSelector } from "react-redux"
import { AppStore } from "../../redux/store"
import { getTodoStart, setTodoStart } from "../../redux/state/todo"
import ButtonNavigate from "../../components/buttonnav.component"
import { routePrivates } from "../../models/routes"
import TitleComponent from "../../components/title.component"




const EditTodo = () => {


    const { todoSelected } = useSelector((state: AppStore) => state.state)
    const dispatch = useDispatch()
    const navigate = useNavigate()



    const initialValuesEditTodo: Todo = {
        name: "",
        description: "",
        id: todoSelected[0].id
    }


    const formik = useFormik<Todo>({
        initialValues: initialValuesEditTodo,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            handleReset(values)
            dispatch(setTodoStart(values))
            dispatch(getTodoStart())
            navigate(`${routePrivates.PRIVATE}${routePrivates.LIST}`)
        }
    })

    const { values, errors, handleChange, handleSubmit,
        handleReset, touched } = formik

    return (
        <>
            <FormComponent onSubmit={handleSubmit} >
                <TitleComponent title="Edit Todos" />
                <Input
                    name="name"
                    placeholder="ingrese name"
                    value={values.name}
                    onChange={handleChange}
                    type="text"
                    errorInput={errors.name}
                    onTouched={touched.name}
                />
                <Input
                    name="description"
                    placeholder="ingrese description"
                    value={values.description}
                    onChange={handleChange}
                    type="text"
                    errorInput={errors.description}
                    onTouched={touched.description}
                />
                <ButtonSubmit name="Edit" />
                <>
                    <ButtonNavigate navigate={navigate} pathRoute={`${routePrivates.PRIVATE}${routePrivates.LIST}`} nameButton={"Back"} />
                </>

            </FormComponent>


        </>
    )
}

export default EditTodo

