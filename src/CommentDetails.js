import React from 'react';

const CommentDetails = ( props ) => {
    console.log(props);
    return (
        <div className="comment">
                <a className="avatar">
                <img src={props.avatar}></img>
                </a>
                <div className="content">
                <a className="author">{props.author}</a>
                <div className="metadata">
                    <span className="date">{props.date}</span>
                </div>
                <div className="text">
                    {props.content}
                </div>
                </div>
            </div>
    )
}

export default CommentDetails;