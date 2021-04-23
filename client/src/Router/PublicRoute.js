import { useContext } from "react";
import { Route, Redirect } from "react-router";
import { UserContext } from "../Contexts/UserContext";

const PublicRoute = ({ component: Component, ...rest }) => {

    const { isLoggedIn } = useContext(UserContext);

    return <Route
        {...rest}
        render = {(props) => {
            return isLoggedIn ?  <Redirect to="/home" /> : <Component {...props} />;
        }}
    />
};

export default PublicRoute;
