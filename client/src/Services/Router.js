import { BrowserRouter, Route, Switch } from "react-router-dom";
import Test from "../Pages/Signup";
import Providers from "./Providers";

const Router = () => {
    return <Providers>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Test} />
            </Switch>
        </BrowserRouter>
    </Providers>
}

export default Router;
