import { Route } from "react-router"

const PrivateRoute = ({ component: Component, ...rest }) => {
    return <Route 
        {...rest}
        render = {(props) => {
            return <Component {...props} />
        }}
    />
};

export default PrivateRoute;
