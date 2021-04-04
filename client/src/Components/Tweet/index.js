import "./index.css";
import "./tablet.css";
import "./mobile.css";

import Avatar from "../Avatar";
import A from "../A";
import { ChatBubbleOutlineRounded, //ChatBubbleRounded, 
        FavoriteBorderRounded, //FavoriteRounded,
        RepeatRounded
    } from "@material-ui/icons";

const Tweet = (props) => {
    return <div className={`tweet ${props.superClass}`}>
            <div className="tweet-authorimg">
                <Avatar size="medium" />
            </div>
            <div className="tweet-body">
                <div className="tweet-body-top">
                    <div className="tweet-body-top-author">
                        <h3>TestUserOne</h3> &nbsp; 
                        <span className="material-icons-round">verified</span> &nbsp; 
                        <h4>@testuser_1</h4>
                        <p> &nbsp; • &nbsp;6h</p>
                    </div>
                    <span className="material-icons-round">more_horiz</span>
                </div>
                <div className="tweet-body-content">
                    <p>
                        Test tweet text content wrapped up in a p tag. This content will be replaced
                        with dynamic tweet content by <A>@developer</A>  after connecting the UI with
                        the API. <A>#TwitterClone</A>
                    </p>
                    <img src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/11/css-gradient.png?fit=1200%2C600&ssl=1" alt="test" />
                </div>
                <div className="tweet-body-panel">
                    <div className="tweet-body-panel-item tbp-item-reply">
                        <div className="tbp-stud">
                            <ChatBubbleOutlineRounded />
                            {/* <ChatBubbleRounded /> */}
                        </div>
                        <p>999K</p>
                        {/* #45A2F2, #E1EEF7 */}
                    </div>
                    <div className="tweet-body-panel-item tbp-item-retweet">
                        <div className="tbp-stud">
                            <RepeatRounded className="t-rotate" />
                        </div>
                        <p>999K</p>
                        {/* #6DC164, #E0F2E8 */}
                    </div>
                    <div className="tweet-body-panel-item tbp-item-like">
                        <div className="tbp-stud">
                            <FavoriteBorderRounded />
                        </div>
                        <p>999K</p>
                        {/* #E34F5D, #F5E1E7 */}
                    </div>
                    <div className="tweet-body-panel-item tbp-item-share">
                        <div className="tbp-stud">
                            <span className="material-icons-round t-rotate">logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
}

export default Tweet;
