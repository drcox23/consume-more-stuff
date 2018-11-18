import React from 'react';

import './ProfileData.css'

const ProfileData = (props) => {
  console.log(props, 'what is exactly is coming thru?')

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


// return (
//   <div key={props.props.user.id} className="profileData">
//     <div>
//       <h3 id="username">Username: {props.props.user.username}</h3>
//       <h3 id="email">Email: {props.props.user.email}</h3> 
//       <h3 id="name">Name: {`${props.props.user.first_name} ${props.props.user.last_name}`}</h3>
//       <h3 id="credit">Account Credit: {`$${props.props.user.account_credit || ' '}`}</h3>
//     </div>
export default ProfileData