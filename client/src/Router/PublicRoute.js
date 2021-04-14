import { Route } from "react-router"

const PublicRoute = ({ component: Component, ...rest }) => {
    return <Route
        {...rest}
        render = {(props) => {
            return <Component {...props} />;
        }}
    />
};

export default PublicRoute;
