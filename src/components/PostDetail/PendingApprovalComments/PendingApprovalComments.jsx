import React from 'react';

import '../comments/comments.css'
import { userInfo } from 'os';

const PendingApprovalComments = (props) => {
  console.log("PROPS????:", props);
  return props.comments.map(comment =>
    <div key={comment.id} className="comment-container">
      <p className="comment-user-id">User: {comment.user_id}</p>
      <p className="comment-body">{comment.body}</p>
      <p className="comment-created-timestamp">created:<br />{comment.created_at}</p>
      <p className="comment-updated-timestamp">last update:<br />{comment.created_at}</p>
    </div>
  )
}

export default PendingApprovalComments