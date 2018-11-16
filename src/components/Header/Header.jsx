import React from 'react';

const Header = (props) => {
    return (
      <div id="headerBar">
  
        <div id="subheader-container">
          {/* imgBox is for resizing the logo with a fixed scale */}
          <div id="imgBox">
            <img src={props.logo} alt="logo" />
          </div>
  
          {/* Search Bar */}
          <input id="searchBar" type="text" placeholder="Search..." />
        </div>
  
        {/* Navigation Links */}
        {props.children}
      </div>
    )
  }

  export default Header