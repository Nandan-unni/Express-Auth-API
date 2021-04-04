import "./index.css";
import "./tablet.css";
import "./mobile.css";

import Avatar from "../Avatar";
import Button from "../Button";
import { PublicRounded, //AlternateEmailRounded, PeopleAltRounded,
         ImageOutlined, PollOutlined, ScheduleOutlined 
    } from "@material-ui/icons";
import { useContext, useRef, useState } from "react";
import { ShadeContext } from "../../Contexts/ShadeContext";

const TweetMaker = (props) => {
    
    const { shade } = useContext(ShadeContext);
    const [hovering, setHovering] = useState(-1);
    const textareaRef = useRef();

    const textareaResizer = (e) => {
        textareaRef.current.style.height = "inherit";
        textareaRef.current.style.height = `${e.target.scrollHeight}px`;
    };

    return <div className={`tweet-maker ${props.superClass}`}>
        <div className="tm-authorimg">
            <Avatar size="medium" />
        </div>
        <div className="tm-body">
            <textarea placeholder="What's happening?" ref={textareaRef} onChange={textareaResizer} />
            <div 
                className="tm-body-visibility" 
                onMouseEnter={() => setHovering(0)}
                onMouseLeave={() => setHovering(-1)}
                style={{
                    backgroundColor: hovering === 0 ? shade[1] : `white`, 
                    color: shade[0]
                }}>
                <PublicRounded />
                <p>Everyone can reply</p>
                {/* <PeopleAltRounded />
                <p>People you follow can reply</p> */}
                {/* <AlternateEmail />
                <p>Only people you mention can reply</p> */}
            </div>
            <div className="tm-body-foot">
                <div className="tm-body-foot-panel" style={{color: shade[0]}}>
                    <div className="tm-body-foot-panel-item"
                        onMouseEnter={() => setHovering(1)}
                        onMouseLeave={() => setHovering(-1)}
                        style={{backgroundColor: hovering === 1 ? shade[1] : `white`}}
                    >
                        <ImageOutlined />
                    </div>
                    <div className="tm-body-foot-panel-item"
                        onMouseEnter={() => setHovering(2)}
                        onMouseLeave={() => setHovering(-1)}
                        style={{backgroundColor: hovering === 2 ? shade[1] : `white`}}
                    >
                        <PollOutlined />
                    </div>
                    <div className="tm-body-foot-panel-item"
                        onMouseEnter={() => setHovering(3)}
                        onMouseLeave={() => setHovering(-1)}
                        style={{backgroundColor: hovering === 3 ? shade[1] : `white`}}
                    >
                        <ScheduleOutlined />
                    </div>
                </div>
                <Button type="solid" label="Tweet" width="80px" />
            </div>
        </div>
    </div>
}

export default TweetMaker;
