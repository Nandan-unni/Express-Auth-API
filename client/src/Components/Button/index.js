import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShadeContext } from "../../Contexts/ShadeContext";

import "./index.css";
import "./mobile.css";
import "./tablet.css";

const Button = (props) => {

    const { shade } = useContext(ShadeContext);
    const [hovering, setHovering] = useState(false);

    const liquidStyle = {
        border: `1px solid ${shade[0]}`,
        backgroundColor: hovering ? shade[1] : `white`,
        color: shade[0],
        width: props.width || "200px",
        height: props.height || "45px"
    }
    const solidStyle = {
        border: `1px solid ${shade[0]}`,
        backgroundColor: shade[0],
        width: props.width || "200px",
        height: props.height || "45px"
    }
    
    let btnClassName = `t-button ${props.superClass} t-button-${props.type}`
    btnClassName += ` t-button-${props.disabled ? `disabled` : `abled`}`

    return <Link href={ props.href }>
        <button 
            className={btnClassName}
            style={ props.type === "solid" ? solidStyle : liquidStyle }
            onClick={props.onClick}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
        >
            {props.img ? <img src={props.img} alt="ButtonLogo" /> : <></>}
            {props.label}
        </button>
    </Link>
}

export default Button;
