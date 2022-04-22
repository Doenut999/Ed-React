import React from 'react';

const Tweet = (props) => {
    return (
        <React.Fragment>
            <h2>{props.name}</h2>
            <h3>{props.message}</h3>
            <button>Delete</button>
            <button>Like</button>
        </React.Fragment>
    );
}

export default Tweet;