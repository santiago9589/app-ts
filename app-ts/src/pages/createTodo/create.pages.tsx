import FormComponent from "../../components/form.component"
import { useFormik } from "formik"
import { validationSchema } from "./utilities/validationSchema.utilities.createTodo"
import { initialValuesCreateTodo } from "./utilities/initValues.utilities.createTodo"
import Input from "../../components/input.components"
import ButtonSubmit from "../../components/button.components"
import { addTodoStart, getTodoStart } from "../../redux/state/todo"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { TodoAd } from "../../models/todoAd"
import ButtonNavigate from "../../components/buttonnav.component"
import { routePrivates } from "../../models/routes"
import TitleComponent from "../../components/title.component"



const CreateTodo = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formik = useFormik<TodoAd>({
        initialValues: initialValuesCreateTodo,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            handleReset(values)
            dispatch(addTodoStart(values))
            dispatch(getTodoStart())
            navigate(`${routePrivates.PRIVATE}${routePrivates.LIST}`)
        }
    })

    const { values, errors, handleChange, handleSubmit,
        handleReset, touched } = formik

    return (
        <>
            <FormComponent onSubmit={handleSubmit} >
                <TitleComponent title="Create Todos" />
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
                <ButtonSubmit name="Create" />
                <>
                    <ButtonNavigate navigate={navigate} pathRoute={`${routePrivates.PRIVATE}${routePrivates.LIST}`} nameButton={"Back"} />
                </>

            </FormComponent>

        </>
    )
}

export default CreateTodo