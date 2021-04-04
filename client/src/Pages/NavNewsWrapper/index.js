import "./index.css";
import "./tablet.css";
import "./mobile.css";

import Navbar from "../../Components/Navbar";
import AccountCard from "../../Components/AccountCard";
import { SearchRounded } from "@material-ui/icons";

const NavNewsWrapper = (props) => {
    return <div className="nn-wrapper">
        <div className="nn-navbar">
            <Navbar />
        </div>
        <div className="nn-child">
            { props.children }
        </div>
        <div className="nn-news">
            <div className="t-news">
                <div className="t-news-search">
                    <SearchRounded />
                    <input placeholder="Search TwitterClone" />
                </div>
                <div className="t-news-suggestions">
                    <h2>Who to follow</h2>
                    <AccountCard superClass="t-news-acc-card" />
                    <AccountCard superClass="t-news-acc-card" />
                    <AccountCard superClass="t-news-acc-card" />
                    <AccountCard superClass="t-news-acc-card" />
                </div>
            </div>
        </div>
    </div>
}

export default NavNewsWrapper;
