import React from 'react';

import './ProfileData.css'

const ProfileData = (props) => {
  console.log(props, "WHAT'S UP MOTHE FUCKASDJASDHASJHD");
  if (props.user.last_name) {
  }
  return (
    <div key={props.id.user.id} className="profileData">
      <div>
        <h3 id="username">Username: {props.id.user.username}</h3>
        <h3 id="email">Email: {props.id.user.email}</h3> 
        <h3 id="name">Name: {`${props.id.user.first_name || ' '} ${props.user.last_name || ' '}`}</h3>
        <h3 id="credit">Account Credit: {`$${props.id.user.account_credit || ' '}`}</h3>
      </div>
    </div>
  )
}

export default ProfileData