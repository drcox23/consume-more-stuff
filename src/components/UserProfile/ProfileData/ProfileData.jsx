import React from 'react';

import './ProfileData.css'

const ProfileData = (props) => {
  console.log(props, "WHAT'S UP MOTHE FUCKASDJASDHASJHD");
  return (
    <div key={props.user.id} className="profileData">
      <div>
        <h3 id="username">Username: {props.user.username}</h3>
        <h3 id="email">Email: {props.user.email}</h3> 
        <h3 id="name">Name: {`${props.user.first_name} ${props.user.last_name}`}</h3>
        <h3 id="credit">Account Credit: {`$${props.user.account_credit}`}</h3>
      </div>
    </div>
  )
}

export default ProfileData