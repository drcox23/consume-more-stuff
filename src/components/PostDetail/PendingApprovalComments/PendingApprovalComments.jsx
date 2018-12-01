import React from 'react';

import '../PendingApprovalComments/PendingApprovalComments.css'
import { userInfo } from 'os';

const PendingApprovalComments = (props) => {
  console.log("PROPS????:", props);
  return props.comments.filter(comment => comment.is_approved === null).map(comment =>
    <div key={comment.id} className="comment-container">
      <p className="comments-need-approval">Pending Comment Approval</p>
      <p className="comment-user-id">User: {comment.user_id}</p>
      <p className="comment-body">{comment.body}</p>
      <p className="comment-created-timestamp">created:<br />{comment.created_at}</p>
      <p className="comment-updated-timestamp">last update:<br />{comment.created_at}</p>
      <button>Approve Comment</button>
      <button>Reject Comment</button>

      {/* {props.auth() &&
        <div className="addCommentBtn">
          <i class="fas fa-check"></i> <div className="addComment-text">Approve Comment</div>
        </div>
      }
      {props.auth() &&
        <div className="addCommentBtn">
          <i class="fas fa-times"></i> <div className="addComment-text">Reject Comment</div>
        </div>
      } */}
    </div>
  )
}

export default PendingApprovalComments