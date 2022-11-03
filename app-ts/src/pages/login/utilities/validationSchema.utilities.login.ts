import * as Yup from "Yup"

export const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required(),
    password: Yup.string()
        .required()
})