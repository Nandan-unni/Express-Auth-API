import "./index.css";
import "./tablet.css";
import "./mobile.css";
import { Eco } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Icon = (props) => {
    return <Link className={`t-icon ${props.superClass}`} to="/">
        <Eco style={{height: props.size || "30px", width: "auto"}} />
    </Link>
}

export default Icon;
