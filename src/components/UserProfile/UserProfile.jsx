import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//Components
import ProfileData from './ProfileData/ProfileData.jsx';
import DraftPosts from './DraftPosts/DraftPost.jsx';
import DraftComments from './DraftComments/DraftComments.jsx';
import AddAccountCredit from './AddAccountCredit/AddAccountCredit.jsx';

//CSS
import './UserProfile.css';

class UserProfile extends Component {
    constructor(props) {
      super(props);
  
    }

    // componentDidMount() {
    //     this.props.dispatch(
    //         getAllUserProfileData())
    //   }
  
    render() {

      return (
        <div id="userProfileContainer">
          <Router>
            <div id="userNav">
              <Route path="/user/profile" render={(props) => <ProfileData {...this.props} />} />
              <Route path="/user/profile/draftposts" render={(props) => <DraftPosts {...this.props} />} />
              <Route path="/user/profile/draftcomments" render={(props) => <DraftComments {...this.props} />} />
              <Route path="/user/profile/accountcredit" render={(props) => <AddAccountCredit {...this.props} />}  />
            </div>
        </Router>
      </div>
      )
    }
  }
  
  const mapStateToProps = state => {
    return {
    }
  }
  
  export default connect(mapStateToProps)(UserProfile);