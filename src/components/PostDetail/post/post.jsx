import React from 'react';

import './post.css'

const Post = (post) => {
    <div key={card.id} className="specificPost">
    <Body info={card} className="title" />
    <div className="subject">{post.subject}</div>
    <div className="body">{post.body}</div>
    <div className="price">Price: {`${post.price}`}</div>
  </div>
}