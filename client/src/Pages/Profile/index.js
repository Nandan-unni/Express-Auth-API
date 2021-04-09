import "./index.css";
import "./tablet.css";
import "./mobile.css";

import NavNewsWrapper from "../NavNewsWrapper";
import BackStud from "../../Components/BackStud";
import Button from "../../Components/Button";
import A from "../../Components/A";
import { CalendarTodayRounded, LinkRounded, PinDropRounded } from "@material-ui/icons";
import Tweet from "../../Components/Tweet";
import Avatar from "../../Components/Avatar";
import Tabbar from "../../Components/Tabbar";

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
            <div className="profile-cover">
                <img src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/11/css-gradient.png?fit=1200%2C600&ssl=1" alt="test" />
            </div>
            <div className="profile-data">
                <div className="profile-data-main">
                    <div className="profile-data-main-left">
                        <Avatar size="large" />
                        <h3>TestUserOne</h3>
                        <p>@test_user_one</p>
                    </div>
                    <div>
                        <br />
                        <Button label="Edit Profile" width="110px" height="40px" />
                    </div>
                </div>
                <div className="profile-data-sub">
                    <div className="profile-data-sub-blocks">
                        <span>Bio of the TestUserOne</span>
                    </div>
                    <div className="profile-data-sub-blocks">
                        <div className="profile-data-sub-block">
                            <PinDropRounded />
                            <p>Location</p>
                        </div>
                        <div className="profile-data-sub-block">
                            <LinkRounded />
                            <A type="ext" href="testuserone.com/">testuserone.com</A>
                        </div>
                        <div className="profile-data-sub-block">
                            <CalendarTodayRounded />
                            <p>Joined March 2021</p>
                        </div>
                    </div>
                    <div className="profile-data-sub-blocks">
                        <div className="profile-data-sub-block">
                            <b>999 K</b>
                            <p>Following</p>
                        </div>
                        <div className="profile-data-sub-block">
                            <b>999 K</b>
                            <p>Followers</p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <Tabbar tabs={["Tweets", "Tweets & replies", "Media", "Likes"]} />

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
