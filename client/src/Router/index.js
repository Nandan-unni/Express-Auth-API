import { BrowserRouter, Switch } from "react-router-dom";
import Signup from "../Pages/Signup";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Providers from "../Services/Providers";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
    return <Providers>
        <BrowserRouter>
            <Switch>
                <PublicRoute exact path="/" component={Signup} />
                <PrivateRoute exact path="/home" component={Home} />
                <ProtectedRoute exact path="/:username" component={Profile} />
            </Switch>
        </BrowserRouter>
    </Providers>
}

export default Router;
