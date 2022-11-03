import FormComponent from "../../components/form.component"
import { useFormik } from "formik"
import { validationSchema } from "./utilities/validationSchema.utilities.register"
import { User } from "../../models/user"
import { initialValuesRegister } from "./utilities/initValues.utilities.register"
import Input from "../../components/input.components"
import ButtonSubmit from "../../components/button.components"
import { AppStore } from "../../redux/store"
import { useDispatch, useSelector } from "react-redux"

import { registerTodoStart } from "../../redux/state/user"
import ButtonNavigate from "../../components/buttonnav.component"
import { useNavigate } from "react-router-dom"
import { routePrivates, routePublic } from "../../models/routes"
import TitleComponent from "../../components/title.component"
import SpinComponent from "../../components/spin.components"

const Register = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isLoading } = useSelector((state: AppStore) => state.user)


    const formik = useFormik<User>({
        initialValues: initialValuesRegister,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(registerTodoStart(values))
            handleReset(values)
            navigate(`${routePrivates.PRIVATE}${routePrivates.LIST}`)
        }
    })


    const { values, errors, handleChange, handleSubmit,
        handleReset, touched} = formik

    return (
        <>
            <FormComponent onSubmit={handleSubmit} >
                <TitleComponent title="Register Form" />
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
                    name="displayName"
                    placeholder="ingrese displayName"
                    value={values.displayName}
                    onChange={handleChange}
                    type="text"
                    errorInput={errors.displayName}
                    onTouched={touched.displayName}
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
                            <ButtonSubmit name="Register" />
                            <>
                                <ButtonNavigate navigate={navigate} pathRoute={`${routePublic.LOGIN}`} nameButton={"Do you have account... Login"} />
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

export default Register