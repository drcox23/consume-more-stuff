import React from 'react';

import './ProfileData.css'

const ProfileData = (props) => {
  if (props.user.last_name === "test") {
    props.user.last_name = "";
  }
  return (
    <div key={props.user.id} className="profileData">
      <div>
        <p id="username">Username: {props.user.username}</p>
        <p id="email">Name: {props.user.email}</p>
        <p id="name">Email: {`${props.user.first_name} ${props.user.last_name}`}</p>
        <p id="credit">Account Credit: {`$${props.user.account_credit}`}</p>
      </div>
    </div>
  )
}

export default ProfileData