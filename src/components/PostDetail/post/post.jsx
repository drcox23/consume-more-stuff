import React from 'react';

import './post.css'

const Post = (props) => {
  return(
    <div key={props.items.id} className="specificPost">
    <div className="subject">{props.items.subject}</div>
    <div className="body">{props.items.body}</div>
    <div className="price">Price: {`${props.items.price}`}</div>
  </div>
  )
}

export default Post