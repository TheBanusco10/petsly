import { Route, Switch } from "wouter";
import "./App.css";
import { LoginPage } from "./pages/login/LoginPage";
import { ConfirmPage } from "./pages/login/ConfirmPage";
import { DashboardPage } from "./pages/DashboardPage";
import ProtectedRoute from "./components/ProtectedRoute";

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
