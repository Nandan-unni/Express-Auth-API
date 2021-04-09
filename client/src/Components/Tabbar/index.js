import "./index.css";
import "./tablet.css";
import "./mobile.css";
import { useContext, useState } from "react";
import { ShadeContext } from "../../Contexts/ShadeContext";
import { TabbarContext } from "../../Contexts/TabbarContext";

const Tabbar = (props) => {

    const { shade } = useContext(ShadeContext);
    const { selectedTab, setSelectedTab } = useContext(TabbarContext);
    const [hovering, setHovering] = useState(-1);

    return <div className={`tabbar ${props.superClass}`}>
        {
            props.tabs.map((tab, i) =>
                <p
                    onMouseEnter={() => setHovering(i)}
                    onMouseLeave={() => setHovering(-1)}
                    onClick={() => setSelectedTab(i)}
                    style={{
                        color: selectedTab === i || hovering === i ? shade[0] : `black`,
                        backgroundColor: hovering === i ? shade[1] : `white`,
                        borderBottom: `2px solid ${selectedTab === i ? shade[0] : `white`}`
                    }}
                > {tab} </p>
            )
        }
    </div>
}

export default Tabbar;
