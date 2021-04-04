import "./index.css";
import "./tablet.css";
import "./mobile.css";

const BaseC = (props) => {
    return <div className={`base ${props.superClass}`}></div>
}

export default BaseC;
