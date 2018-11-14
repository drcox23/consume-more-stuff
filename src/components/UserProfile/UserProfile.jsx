import React, { Component } from 'react';
import { connect } from 'react-redux';

import './UserProfile.css';

class UserProfile extends Component {
    constructor(props) {
      super(props);
  
    }

    componentDidMount() {
        this.props.dispatch(
            getUserData())
      }
  
    render() {

      return (
        <Router>
        <div id="userNav">
          <Route path="/user/profile/draftposts" render={(props) => <DraftPost {...this.props} />} />
          <Route path="/user/profile/draftcomments" render={(props) => <DraftComments {...this.props} />} />
          {/* <Route path="/user/profile/accountcredit" component={UserProfile} /> */}
        </div>
      </Router>
      )
    }
  }
  
  const mapStateToProps = state => {
  
    return {
    }
  }
  
  export default connect(mapStateToProps)(UserProfile);