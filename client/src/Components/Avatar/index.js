import "./index.css";
import "./tablet.css";
import "./mobile.css";

import { Link } from "react-router-dom";

const Avatar = (props) => {
    return <Link
        className={`t-avatar ${props.superClass} t-avatar-${props.size}`}
        href={`/${props.username}`}
    >
        {/* <img src={props.img} alt={props.username} /> */}
        <img src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/11/css-gradient.png?fit=1200%2C600&ssl=1" alt="test" />
    </Link>
}

export default Avatar;
