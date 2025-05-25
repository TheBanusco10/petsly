import * as Yup from "yup";

export const email = Yup.string().email("Invalid email").required("Required");

export const password = Yup.string()
  .min(6, "Password must be at least 6 characters")
  .required("Required");
