import React from 'react';
import './post.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Post = (props) => {
  const match = props.props.match.url
  return (
    <div key={props.detailedItem.id} className="specificPost">
      <div className="subject-container">{props.detailedItem.subject}</div>
      <div className="body-container">{props.detailedItem.body}</div>
      <div className="price-container">Price: ${`${props.detailedItem.price}`}</div>
      <div className="createdAt-container">{`${props.detailedItem.created_at}`}</div>


      <Link to={`${match}/add-comment`}>
        <div className="addCommentBtn">
          <i class="fas fa-plus"></i> <div className="addComment-text">Add Comment</div>
        </div>
      </Link>



    </div>
  )
}

export default Post