import "./index.css";
import "./tablet.css";
import "./mobile.css";

import Icon from "../../Components/Icon";
import Button from "../../Components/Button";

const Landing = () => {
    return <div className="landing">
        <div className="lan-left">
            <Icon superClass="lan-left-icon" />
        </div>
        <div className="lan-right">
            <div className="lan-right-box">
                <Icon />
                <h1>See what’s happening in the world right now</h1>
                <br />
                <b>Join TwitterClone today.</b>
                <Button 
                    type="solid" 
                    label="Sign up" 
                    width="100%" 
                    height="50px"
                    superClass="lan-btn" 
                />
                <Button 
                    type="liquid" 
                    label="Log in" 
                    width="100%" 
                    height="50px"
                    superClass="lan-btn" 
                />
            </div>
        </div>
    </div>
}

export default Landing;
