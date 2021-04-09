import "./index.css";
import "./tablet.css";
import "./mobile.css";

import Icon from "../../Components/Icon";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import googleLogo from "../../Images/google.png";

const Signin = () => {
    return <div className="signin">
        <div className="signin-content">
            <Icon size="50px" />
            <h1>Log in to TwitterClone</h1>
            <br />
            <form>
                <Input type="text" name="username" label="Phone, email or username" height="55px" width="100%" />
                <br />
                <Input label="Password" height="55px" width="100%" />
                <br />
                <Button label="Log in" type="solid" width="300px" />
                <br />
                <Button 
                    label="Log in with Google" 
                    type="gas" 
                    width="300px" 
                    height="55px"
                    img={googleLogo} 
                />
                <br />
                <div className="signin-content-links">
                    <a href="/forgotpassword">Forgot password ?</a>
                    &nbsp; • &nbsp; 
                    <a href="/">Sign up for TwitterClone</a>
                </div>
            </form>
        </div>
    </div>
}

export default Signin;
