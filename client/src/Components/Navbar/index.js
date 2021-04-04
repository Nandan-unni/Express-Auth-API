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

const Navbar = (props) => {
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
            <NavbarItem 
                index={4}
                link="/" 
                icon={NotificationsOutlined} 
                filledIcon={NotificationsRounded} 
                label="Notifications" 
            />
            <NavbarItem 
                index={5}
                link="/" 
                icon={MailOutlineRounded} 
                filledIcon={MailRounded} 
                label="Messages" 
            />
            <NavbarItem 
                index={6}
                link="/" 
                icon={PaletteOutlined} 
                filledIcon={PaletteRounded} 
                label="Display" 
                mobileHidden
            />
            <NavbarItem 
                index={7}
                link="/" 
                icon={PersonOutlineRounded} 
                filledIcon={PersonRounded} 
                label="Profile" 
                mobileHidden
            />
            <NavbarItem 
                index={8}
                link="/" 
                icon={MoreHorizRounded} 
                filledIcon={MoreHorizRounded} 
                label="More" 
                mobileHidden
            />
            <Button 
                type="solid" 
                label={<><Add /><p>Tweet</p></>} 
                superClass="navbar-t-button" 
                width="220px" 
            />
        </div>
        <AccountCard type="self" superClass="navbar-user-card" />
        <Avatar size="medium" superClass="navbar-user-icon" />
    </div>
}

export default Navbar;
