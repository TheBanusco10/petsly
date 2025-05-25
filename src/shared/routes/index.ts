import { authPublicRoutes } from "../../features/auth/routes";
import { petsProtectedRoutes } from "../../features/pets/routes";
import { DashboardPage } from "../pages/DashboardPage";

export const protectedRoutes = [
  {
    path: "/",
    component: DashboardPage,
  },
  ...petsProtectedRoutes,
];

export const publicRoutes = [...authPublicRoutes];
