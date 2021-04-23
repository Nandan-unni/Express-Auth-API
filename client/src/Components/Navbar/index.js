import "./index.css";
import "./tablet.css";
import "./mobile.css";

import NavbarItem from "./NavbarItem";
import Button from "../Button";
import AccountCard from "../AccountCard";

import {
    HomeRounded, HomeOutlined,
    SearchOutlined, SearchRounded,
    ExploreRounded, ExploreOutlined,
    NotificationsRounded, NotificationsOutlined,
    MailOutlineRounded, MailRounded,
    PaletteOutlined, PaletteRounded, 
    PersonRounded, PersonOutlineRounded, 
    MoreHorizRounded, Add
} from "@material-ui/icons";

import Icon from "../Icon";
import Avatar from "../Avatar";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";

const Navbar = (props) => {

    const { user, isLoading } = useContext(UserContext);

    return <div className={`navbar ${props.superClass}`} id="navbar" >
        <div className="navbar-items">
            <Icon superClass="navbar-t-icon" />
            <NavbarItem 
                index={1}
                link="/" 
                icon={HomeOutlined} 
                filledIcon={HomeRounded} 
                label="Home" 
            />
            <NavbarItem 
                index={2}
                link="/"
                icon={SearchOutlined} 
                filledIcon={SearchRounded} 
                label="Search"
                desktopHidden 
            />
            <NavbarItem 
                index={3}
                link="/" 
                icon={ExploreOutlined} 
                filledIcon={ExploreRounded} 
                label="Explore" 
                mobileHidden
            />
            { !isLoading && <NavbarItem 
                index={4}
                link="/" 
                icon={NotificationsOutlined} 
                filledIcon={NotificationsRounded} 
                label="Notifications" 
            />}
            { !isLoading && <NavbarItem
                index={5}
                link="/" 
                icon={MailOutlineRounded} 
                filledIcon={MailRounded} 
                label="Messages" 
            />}
            <NavbarItem
                index={6}
                link="/" 
                icon={PaletteOutlined} 
                filledIcon={PaletteRounded} 
                label="Display" 
                mobileHidden
            />
            {/* document.documentElement.style.setProperty('--your-variable', '#YOURCOLOR'); */}
            { !isLoading && <NavbarItem
                index={7}
                link="/" 
                icon={PersonOutlineRounded} 
                filledIcon={PersonRounded} 
                label="Profile" 
                mobileHidden
            />}
            <NavbarItem 
                index={8}
                link="/" 
                icon={MoreHorizRounded} 
                filledIcon={MoreHorizRounded} 
                label="More" 
                mobileHidden
            />
            { !isLoading && <Button 
                type="solid" 
                label={<><Add /><p>Tweet</p></>} 
                superClass="navbar-t-button" 
                width="220px" 
            />}
        </div>
        { user && <AccountCard type="self" account={user} superClass="navbar-user-card" /> }
        { user && <Avatar size="medium" img={user.image} superClass="navbar-user-icon" /> }
    </div>
}

export default Navbar;
