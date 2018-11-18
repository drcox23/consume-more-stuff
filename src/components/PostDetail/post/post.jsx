import React from 'react';
import './post.css'

const Post = (props) => {
  return (
    <div key={props.detailedItem.id} className="specificPost">
      <div className="subject-container">{props.detailedItem.subject}</div>
      <div className="body-container">{props.detailedItem.body}</div>
      <div className="price-container">Price: ${`${props.detailedItem.price}`}</div>
      <div className="createdAt-container">{`${props.detailedItem.created_at}`}</div>
    </div>
  )
}

export default Post