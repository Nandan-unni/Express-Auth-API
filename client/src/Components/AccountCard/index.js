import "./index.css";
import "./tablet.css";
import "./mobile.css";
import { MoreHorizRounded } from "@material-ui/icons";
import Button from "../Button";
import Avatar from "../Avatar";
import { useContext, useState } from "react";
import { ShadeContext } from "../../Contexts/ShadeContext";

const AccountCard = ({account, ...props}) => {

    const [hovering, setHovering] = useState(false);
    const { shade } = useContext(ShadeContext);

    return <div 
        className={`account-card ${props.superClass}`}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        style={{backgroundColor: hovering ? shade[1] : `white`}}
    >
        <Avatar size="small" />
        <div className="account-card-body">
            <div className="account-card-body-data">
                <h3>jh</h3>
                <p>@testuser_2</p>
            </div>
            {
                props.type === "self" ?
                    <MoreHorizRounded />
                :
                    <Button label="Follow" type="liquid" width="80px" height="32px" />
            }
        </div>
    </div>
}

export default AccountCard;
