import "./index.css";
import "./tablet.css";
import "./mobile.css";

import { useContext, useState } from "react";
import { ShadeContext } from "../../../Contexts/ShadeContext";
import { Link } from "react-router-dom";
import { NavbarContext } from "../../../Contexts/NavbarContext";

const NavbarItem = (props) => {
    const [hovering, setHovering] = useState(false);
    const { shade } = useContext(ShadeContext);
    const { selectedNav, setSelectedNav } = useContext(NavbarContext);
    let navItemClassName = "navbar-item ";
    navItemClassName += props.desktopHidden ? `navbar-item-desktop-hidden` : ``;
    navItemClassName += props.mobileHidden ? `navbar-item-mobile-hidden` : ``;
    navItemClassName += props.tabletHidden ? `navbar-item-tablet-hidden` : ``;

    return <div 
            className={navItemClassName}
            onClick={() => setSelectedNav(props.index)}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            style={{backgroundColor: hovering ? shade[1] : `white`}}
        >
            <Link to={props.link}>
                { 
                    hovering || props.index === selectedNav ? 
                        <props.filledIcon style={{color: shade[0]}} />
                    : 
                        <props.icon style={{color : `rgb(100, 100, 100)`}} />
                }
                <p style={{color: hovering || props.index === selectedNav ? shade[0] : `black`}}>{ props.label }</p>
            </Link>
    </div>
}

export default NavbarItem;
