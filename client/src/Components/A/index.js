import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShadeContext } from "../../Contexts/ShadeContext";
import "./index.css";
import "./mobile.css";
import "./tablet.css";

const A = (props) => {
    const { shade } = useContext(ShadeContext);
    return (
        <Link 
            to={props.href} 
            className={`t-a ${props.superClass}`}
            style={{color: shade[0], ...props.style}}
        >
                { props.children }
        </Link>
    );
}

export default A;
