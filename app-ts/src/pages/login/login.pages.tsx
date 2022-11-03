import FormComponent from "../../components/form.component"
import { useFormik } from "formik"
import { validationSchema } from "./utilities/validationSchema.utilities.login"
import { User } from "../../models/user"
import { initialValuesLogin } from "./utilities/initValues.utilities.login"
import Input from "../../components/input.components"
import ButtonSubmit from "../../components/button.components"
import { AppStore } from "../../redux/store"
import { useDispatch, useSelector } from "react-redux"
import { loginTodoStart } from "../../redux/state/user"
import ButtonNavigate from "../../components/buttonnav.component"
import { useNavigate } from "react-router-dom"
import { routePrivates, routePublic } from "../../models/routes"
import TitleComponent from "../../components/title.component"
import SpinComponent from "../../components/spin.components"

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isLoading } = useSelector((state: AppStore) => state.user)

    const formik = useFormik<User>({
        initialValues: initialValuesLogin,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(loginTodoStart(values))
            handleReset(values)
            navigate(`${routePrivates.PRIVATE}${routePrivates.LIST}`)
        }
    })


    const { values, errors, handleChange, handleSubmit,
        handleReset, touched } = formik

    return (
        <>
            <FormComponent onSubmit={handleSubmit} >
                <TitleComponent title="Login Form" />
                <Input
                    name="email"
                    placeholder="email@email.com"
                    value={values.email}
                    onChange={handleChange}
                    type="text"
                    errorInput={errors.email}
                    onTouched={touched.email}
                />
                <Input
                    name="password"
                    placeholder="ingrese password"
                    value={values.password}
                    onChange={handleChange}
                    type="text"
                    errorInput={errors.password}
                    onTouched={touched.password}
                />
                {
                    !isLoading ? (
                        <>
                            <ButtonSubmit name="Login" />
                            <>
                                <ButtonNavigate navigate={navigate} pathRoute={`${routePublic.REGISTER}`} nameButton={"Dont you have account?... Register"} />
                            </>
                        </>

                    ) : (
                        <SpinComponent />
                    )
                }

            </FormComponent>
        </>
    )
}

export default Login

