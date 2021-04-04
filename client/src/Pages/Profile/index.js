import "./index.css";
import "./tablet.css";
import "./mobile.css";

import NavNewsWrapper from "../NavNewsWrapper";
import BackStud from "../../Components/BackStud";
import Button from "../../Components/Button";
import A from "../../Components/A";
import { CalendarTodayRounded, LinkRounded, PinDropRounded } from "@material-ui/icons";
import Tweet from "../../Components/Tweet";

const Profile = () => {
    return <NavNewsWrapper>
        <div className="profile">
            <div className="nn-child-head">
                <BackStud superClass="nn-child-head-navigator" />
                <div className="nn-child-head-data">
                    <h3>TestUserOne</h3>
                    <p>999 Tweets</p>
                </div>
            </div>
            <div className="profile-data">
                <div className="profile-data-cover">
                    <img src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/11/css-gradient.png?fit=1200%2C600&ssl=1" alt="test" />
                </div>
                <div className="profile-data-main">
                    <div className="profile-data-main-left"></div>
                    <Button />
                </div>
                <div className="profile-data-main">
                    <div className="profile-data-main-blocks">
                        <span>Bio of the TestUserOne</span>
                    </div>
                    <div className="profile-data-main-blocks">
                        <div className="profile-data-main-block">
                            <PinDropRounded />
                            <p>Location</p>
                        </div>
                        <div className="profile-data-main-block">
                            <LinkRounded />
                            <A href="testuserone.com/">testuserone.com</A>
                        </div>
                        <div className="profile-data-main-block">
                            <CalendarTodayRounded />
                            <p>Joined March 2021</p>
                        </div>
                    </div>
                    <div className="profile-data-main-blocks">
                        <div className="profile-data-main-block">
                            <span>999 K</span>
                            <p>Following</p>
                        </div>
                        <div className="profile-data-main-block">
                            <span>999 K</span>
                            <p>Followers</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Tab section */}
            <div className="profile-tweets">
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
            </div>
        </div>
    </NavNewsWrapper>
}

export default Profile;
