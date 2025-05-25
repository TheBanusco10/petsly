import * as Yup from "yup";
import { email, password } from "../../../shared/schemas/defaultSchemaObjects";

export const registerFormValidationSchema = Yup.object().shape({
  email,
  password,
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required"),
});
