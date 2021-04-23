import { useContext } from "react";
import { Route, Redirect } from "react-router";
import { UserContext } from "../Contexts/UserContext";

const PrivateRoute = ({ component: Component, ...rest }) => {

    const { isLoggedIn } = useContext(UserContext);

    return <Route 
        {...rest}
        render = {(props) => {
            return isLoggedIn ? <Component {...props} /> : <Redirect to="/" />;
        }}
    />
};

export default PrivateRoute;
