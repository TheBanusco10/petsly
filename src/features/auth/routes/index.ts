import { ConfirmPage } from "../pages/ConfirmPage";
import { LoginPage } from "../pages/LoginPage";

export const authPublicRoutes = [
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/confirm",
    component: ConfirmPage,
  },
];
