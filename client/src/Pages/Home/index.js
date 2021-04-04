import Tweet from "../../Components/Tweet";
import TweetMaker from "../../Components/TweetMaker";
import NavNewsWrapper from "../NavNewsWrapper";
import "./index.css";
import "./mobile.css";
import "./tablet.css";

const Home = () => {
    return <NavNewsWrapper>
            <div className="t-home">
                <div className="nn-child-head">
                    <h2>Home</h2>
                </div>
                <div className="home-tweetmaker">
                    <TweetMaker />
                </div>
                <div className="home-tweets">
                    <Tweet />
                    <Tweet />
                    <Tweet />
                    <Tweet />
                </div>
            </div>
        </NavNewsWrapper>
}

export default Home;
