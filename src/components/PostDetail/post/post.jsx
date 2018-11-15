import React from 'react';
import { getPostandCommentsById } from '../../../actions/actions.js';

import './post.css'

const Post = (props) => {

  const checkForItem = (propCheck) => {
    console.log(propCheck.detailedItem, 'wtf?')
    if (isEmpty(propCheck.detailedItem)) {
      getPostandCommentsById(propCheck.props.match.params.id);
      console.log(propCheck)
      return false;
    }
    return true
  }

  const isEmpty = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

  console.log("Post - props:", props);
  return (
    <div>
    {getPostandCommentsById(props.props.match.params.id)}
    {checkForItem(props) &&
    <div key={props.detailedItem.id} className="specificPost">
      <div className="subject-container">{props.detailedItem.subject}</div>
      <div className="body-container">{props.detailedItem.body}</div>
      <div className="price-container">Price: ${`${props.detailedItem.price}`}</div>
      <div className="createdAt-container">{`${props.detailedItem.created_at}`}</div>
    </div>}
    {!checkForItem(props) &&
    <div key={props.detailedItem.id} className="specificPost">No item
      {/* <div className="subject-container">{props.detailedItem.subject}</div>
      <div className="body-container">{props.detailedItem.body}</div>
      <div className="price-container">Price: ${`${props.detailedItem.price}`}</div>
      <div className="createdAt-container">{`${props.detailedItem.created_at}`}</div> */}
    </div>}
    </div>
  )
}

export default Post