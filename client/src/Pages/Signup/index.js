import "./index.css";
import "./tablet.css";
import "./mobile.css";

import Icon from "../../Components/Icon";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import A from "../../Components/A";
import googleLogo from "../../Images/google.png";

const BaseP = () => {
    return <div className="signup">
        <div className="signup-content">
            <div className="signup-content-top">
                <b>.</b>
                <Icon size="40px" />
                <Button label="Next" type="solid" width="80px" height="35px" disabled={true} />
            </div><br />
            <h2>Create your account</h2>
            <Input label="Name" type="text" height="55px" /><br />
            <Input label="Phone" type="text" height="55px" /><br />
            <A>Use email instead</A><br /><br />
            <b>Date of birth</b>
            <p>
                This will not be shown publicly. Confirm your own age, even if this account 
                is for a business, a pet, or something else.
            </p><br />
            <div className="signup-content-dob">
                <Input label="Month" type="select" height="55px" width="50%" />
                <Input label="Day" type="select" height="55px" width="15%" />
                <Input label="Year" type="select" height="55px" width="25%" />
            </div>
        </div>
    </div>
}

export default BaseP;
