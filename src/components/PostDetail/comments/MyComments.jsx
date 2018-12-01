import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = (props) => {
    return (
        <Link to={props.to}>
            {/* <button className="auth-navbar-btns">{props.title}</button> */}
            <p className="auth-navbar-btns">{props.title}</p>
        </Link>
    )
}

export const MyComments = (props) => {
    return (props.userComments.map(comment => {
        let selectedComment = comment.post_id;
        return (<div key={comment.id} className="comment-container">
            <div className="post-id">Post: {props.items.map(post => {
                if (post.id === selectedComment)
                    return (<LinkButton key={post.id} to={`/dashboard/post/${post.id}`} title={post.subject} />)
            })}</div>
            <p className="comment-user-id">User: {comment.user_id}</p>
            <p className="comment-body">{comment.body}</p>
            <p className="comment-created-timestamp">created:<br />{comment.created_at}</p>
            <p className="comment-updated-timestamp">last update:<br />{comment.created_at}</p>
        </div>)
    })
    )
}

export default MyComments;

