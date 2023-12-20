import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
    username: Yup.string().required("Campo obrigatório"),
    password: Yup.string().required("Campo obrigatório"),
});
