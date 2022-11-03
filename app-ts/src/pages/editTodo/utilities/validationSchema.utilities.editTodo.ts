import * as Yup from "Yup"


export const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required(),
    description: Yup.string()
        .required()
})
