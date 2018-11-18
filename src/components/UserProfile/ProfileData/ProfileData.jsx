import React from 'react';

import './ProfileData.css'

const ProfileData = (props) => {
  console.log(props, 'what is exactly is coming thru?')
  return (
    <div key={props.props.user.id} className="profileData">
      <div>
        <h3 id="username">Username: {props.props.user.username}</h3>
        <h3 id="email">Email: {props.props.user.email}</h3> 
        <h3 id="name">Name: {`${props.props.user.first_name} ${props.props.user.last_name}`}</h3>
        <h3 id="credit">Account Credit: {`$${props.props.user.account_credit || ' '}`}</h3>
      </div>
    </div>
  )
}

export default ProfileData