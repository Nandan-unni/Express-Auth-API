import "./index.css";
import "./tablet.css";
import "./mobile.css";

const Input = (props) => {
    return <div className={`t-input ${props.superClass}`} style={{height: props.height, width: props.width}}>
        <label htmlFor={props.name || props.label.toLowerCase()}>{props.label}</label>
        <input 
            name={props.name || props.label.toLowerCase()} 
            id={props.name || props.label.toLowerCase()} 
            type={props.type || props.label.toLowerCase()} 
        />
    </div>
}

export default Input;
