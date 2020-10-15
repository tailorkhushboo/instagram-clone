import React from "react";
import react_logo from './react-logo.jpg';

function Post(){
    return(
        <div className="post">
            <h3>Username</h3>

            {/* header -> avatar + username */}
            <img
                className="post__image"
                // src={require("./react-logo.jpg")}
                src={react_logo}
            />

            {/* image */}
            <p className="post__text">This website example <strong>http://www.cruiseshipodyssey.com/worlds-fleet/</strong> I found doesn’t use react, but shows ships based on specific cruise.</p>
            {/* username + caption */}
        </div>
    );
}
export default Post;
