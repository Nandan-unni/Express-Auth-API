import "./index.css";
import "./tablet.css";
import "./mobile.css";

import { useContext, useState } from "react";
import { ShadeContext } from "../../Contexts/ShadeContext";
import { ArrowBackRounded } from "@material-ui/icons";

const BaseC = (props) => {

    const { shade } = useContext(ShadeContext);
    const [hovering, setHovering] = useState(false);

    return <div className={`back-stud ${props.superClass}`}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            style={{
                backgroundColor: hovering ? shade[1] : `white`, 
                color: shade[0]
            }}>
                <ArrowBackRounded />
        </div>
}

export default BaseC;
