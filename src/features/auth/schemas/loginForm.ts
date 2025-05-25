import * as Yup from "yup";
import { email, password } from "../../../shared/schemas/defaultSchemaObjects";

export const loginFormValidationSchema = Yup.object().shape({
  email,
  password,
});
