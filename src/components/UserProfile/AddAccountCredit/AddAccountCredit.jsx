import React from 'react';

import './AddAccountCredit.css'

const AddAccountCredit = (props) => {
  console.log("\n Props:", props)
  return (
    <div key={props.user.id} className="accountCredit">
      <h3 id="account-credit-title">Account Credit: {`$${props.user.account_credit}`}</h3>

      <div id="add-credit-container">

        <p id="add-more-credit-title">Add More Credit</p>

        {/* Adding more credit */}
        <form id="addCredit-form" onSubmit={props.handleSubmit}>
          <label id="addCredit-label">Credit to Add:</label>

          <input onChange={props.handleChange} className="user-input" type="text" name="account_credit" placeholder="Enter number..." />

          <br />
          <input id="user-addCredit-btn" type="submit" value="Add" />
          <br />
        </form>
      </div>
    </div>


  )
}

export default AddAccountCredit