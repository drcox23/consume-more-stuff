import React from 'react';

import './ProfileData.css'

const ProfileData = (props) => {

  if (props.user.last_name === "test") {
    props.user.last_name = "";
  }
  return (
    <div key={props.user.id} className="profileData">
      <p className="rowHeader">Username:</p>
      <p className="rowData">{props.user.username}</p>
      <p className="rowHeader">Name:</p>
      <p className="rowData">{props.user.email}</p>
      <p className="rowHeader">Email:</p>
      <p className="rowData">{`${props.user.first_name} ${props.user.last_name}`}</p>
      <p className="rowHeader">Account Credit:</p>
      <p className="rowData">{`$${props.user.account_credit}`}</p>
    </div>
  )
}

export default ProfileData