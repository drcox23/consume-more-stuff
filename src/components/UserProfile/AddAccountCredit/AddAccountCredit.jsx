import React from 'react';

import './AddAccountCredit.css'

const AddAccountCredit = (props) => {
  console.log("\n Props:", props)
  return (
    <div key={props.user.id} className="accountCredit">
      <h3 id="accountCredit">Account Credit: {`$${props.user.account_credit}`}</h3>

      <div id="container">

      <div id="add-credit">Add More Credit</div>

      {/* Adding more credit */}
      <form onSubmit={props.handleSubmit}>

        <div class="row">
          <div class="rowHeader">
            <label>Credit to Add:</label>
            <input onChange={props.handleChange} className="user-input" type="text" name="account_credit" placeholder="Enter the amount of credit you want to add" />
          </div>
        </div>

        <br />
        <input id="user-addCredit-btn" type="submit" value="Add" />
        <br />
      </form>
      </div>
    </div>


  )
}

export default AddAccountCredit