import "./index.css";
import "./tablet.css";
import "./mobile.css";

import Icon from "../../Components/Icon";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import A from "../../Components/A";
import googleLogo from "../../Images/google.png";
import axios from "axios";
import { signInWithGoogle, auth } from "../../Firebase";
import { API_DOMAIN } from "../../Services/config";
import { useContext } from "react";
import { UserContext} from "../../Contexts/UserContext"


const BaseP = () => {

    const { setUserId, setIsLoggedIn } = useContext(UserContext);

    const handleGoogleSignup = async () => {
        await signInWithGoogle();
        console.log(auth.currentUser);
        await axios.post(`${API_DOMAIN}/user/create`, auth.currentUser);
        setUserId(auth.currentUser.uid);
        setIsLoggedIn(true);
    }

    return <div className="signup">
        <div className="signup-content">
            <div className="signup-content-top">
                <b>.</b>
                <Icon size="40px" />
                <Button label="Next" type="solid" width="80px" height="35px" disabled={true} />
            </div><br />
            <h2>Create your account</h2>
            <Input superClass="signup-input" label="Name" type="text" height="55px" /><br />
            <Input superClass="signup-input" label="Phone" type="text" height="55px" /><br />
            <A>Use email instead</A><br /><br />
            <b>Date of birth</b>
            <p>
                This will not be shown publicly. Confirm your own age, even if this account 
                is for a business, a pet, or something else.
            </p><br />
            <div className="signup-content-dob">
                <Input superClass="signup-input" label="Month" type="select" height="55px" width="50%" />
                <Input superClass="signup-input" label="Day" type="select" height="55px" width="15%" />
                <Input superClass="signup-input" label="Year" type="select" height="55px" width="25%" />
            </div><br />
            <div className="signup-google-btn">
                <Button 
                    onClick={handleGoogleSignup}
                    img={googleLogo} 
                    label="Signup with Google" 
                    type="gas" 
                    width="225px" 
                    height="50px" 
                />
            </div>
        </div>
    </div>
}

export default BaseP;
