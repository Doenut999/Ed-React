import React from 'react';
import Tweet from "./Tweet";

function TweetList(props) {
    return (
        <div className="tweet-list">
            <Tweet name={props.name} message={props.message}/>
            <Tweet name={props.name} message={props.message}/>
            <Tweet name={props.name} message={props.message}/>
            <Tweet name={props.name} message={props.message}/>
            <Tweet name={props.name} message={props.message}/>
            <Tweet name={props.name} message={props.message}/>

        </div>
    );
}

export default TweetList;