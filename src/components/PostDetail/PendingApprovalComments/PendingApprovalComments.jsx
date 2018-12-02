import React from 'react';

import '../PendingApprovalComments/PendingApprovalComments.css'
import { userInfo } from 'os';

const PendingApprovalComments = (props) => {
  console.log("PROPS????:", props);
  return props.comments.map(comment =>
    <div key={comment.id} className="PendingApprovalComments-container">

      {/* <p className="comments-need-approval">Pending Comment Approval</p> */}

      {props.auth() && <p className="comments-need-approval">Pending Comment Approval</p>}

      <p className="comment-user-id">User: {comment.user_id}</p>
      <p className="comment-body">{comment.body}</p>
      <p className="comment-created-timestamp">created:<br />{comment.created_at}</p>
      <p className="comment-updated-timestamp">last update:<br />{comment.created_at}</p>

      {props.auth() && <button className="rejectCommentBtn" onClick={(() => props.rejectComment(comment.id))}><i class="fas fa-times"></i> Reject Comment</button>}

      {props.auth() && <button className="approveCommentBtn" onClick={(() => props.approveComment(comment.id))}><i class="fas fa-check"></i> Approve Comment</button>}


      {/* <button>Approve Comment</button>
      <button>Reject Comment</button> */}

      {/* {props.auth() &&
        <div className="approveCommentBtn">
          <i class="fas fa-check"></i> <div className="approveComment-text">Approve Comment</div>
        </div>
      }
      {props.auth() &&
        <div className="rejectCommentBtn">
          <i class="fas fa-times"></i> <div className="rejectComment-text">Reject Comment</div>
        </div>
      } */}
    </div>
  )
}

export default PendingApprovalComments