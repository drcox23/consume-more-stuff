import React from 'react';

import './post.css'

const Post = (props) => {
  return(
    <div key={props.detailedItem.id} className="specificPost">
      <div className="subject">{props.detailedItem.subject}</div>
      <div className="body">{props.detailedItem.body}</div>
      <div className="price">Price: {`${props.detailedItem.price}`}</div>
  </div>
  )
}

export default Post