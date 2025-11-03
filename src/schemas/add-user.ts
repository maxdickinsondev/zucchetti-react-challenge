import * as yup from "yup";

export const userSchema = yup.object({
  name: yup
    .string()
    .required("O nome é obrigatório")
    .matches(
      /[a-zA-ZÀ-ÿ]/,
      "O nome deve conter pelo menos uma letra",
    ),
  email: yup
    .string()
    .required("O e-mail é obrigatório")
    .email("E-mail inválido"),
});
