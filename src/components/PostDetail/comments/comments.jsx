import React from 'react';

import './comments.css'
import { userInfo } from 'os';

const Comments = (props) => {
    console.log(props, 'OMFG WTF')
    return props.comments.map(comment =>
        <div key={comment.id} className="comment-container">
            <p className="comment-user-id">User: {comment.user_id}</p>
            <p className="comment-body">{comment.body}</p>
            <p className="comment-created-timestamp">created:<br />{comment.created_at}</p>
            <p className="comment-updated-timestamp">last update:<br />{comment.created_at}</p>
        </div>
    )
}

export default Comments