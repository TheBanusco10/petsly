import { Route, Switch } from "wouter"
import { protectedRoutes, publicRoutes } from "../../routes"
import ProtectedRoute from "./ProtectedRoute"

export const Routes = () => {
    return (
        <Switch>
            {publicRoutes.map((page) => (
                <Route key={page.path} path={page.path} component={page.component} />
            ))}

            {protectedRoutes.map((page) => (
                <Route
                    key={page.path}
                    path={page.path}
                    component={() => (
                        <ProtectedRoute>
                            <page.component />
                        </ProtectedRoute>
                    )}
                />
            ))}

            <Route path="*">404, not found!</Route>
        </Switch>
    )
}