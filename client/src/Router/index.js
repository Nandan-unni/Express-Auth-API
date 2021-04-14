import { BrowserRouter, Switch } from "react-router-dom";
import Test from "../Pages/Signup";
import Providers from "../Services/Providers";
// import PublicRoute from "./PrivateRoute";
// import PrivateRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
    return <Providers>
        <BrowserRouter>
            <Switch>
                <ProtectedRoute path="/" component={Test} />
            </Switch>
        </BrowserRouter>
    </Providers>
}

export default Router;
