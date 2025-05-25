import { Route, Switch } from "wouter";
import "./App.css";
import { LoginPage } from "./features/auth/pages/LoginPage";
import { ConfirmPage } from "./features/auth/pages/ConfirmPage";
import { DashboardPage } from "./shared/pages/DashboardPage";
import ProtectedRoute from "./shared/components/ProtectedRoute";

export const App = () => {
  const protectedPages = [
    {
      path: "/",
      component: DashboardPage,
    }
  ]

  return (
    <>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/confirm" component={ConfirmPage} />

        {protectedPages.map((page) => (
          <ProtectedRoute key={page.path}>
            <Route path={page.path} component={page.component} />
          </ProtectedRoute>
        ))}
      </Switch>
    </>
  );
}
