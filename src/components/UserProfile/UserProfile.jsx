import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//Components
import ProfileData from './ProfileData/ProfileData.jsx';
import DraftPosts from './DraftPosts/DraftPost.jsx';
import DraftComments from './DraftComments/DraftComments.jsx';
import AddAccountCredit from './AddAccountCredit/AddAccountCredit.jsx';

//Actions
import { getAllUserProfileData } from '../../actions/actions.js';

//CSS
import './UserProfile.css';

const LinkButton = (props) => {
  return (
    <Link to={props.to}>
      <button className="userProfile-btns">{props.title}</button>
    </Link>
  )
}

class UserProfile extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    console.log("PROPS WHEN LOADING", this.props)
    // this.props.dispatch(
    //     getAllUserProfileData()
    // )
  }

  render() {
    const { id } = this.props.user;
    
    return (
      <div id="userProfileContainer">
        <Router>
          <div className="userProfileNav">
            <LinkButton to={`/user/profile/${id}/data`} title={"My Profile"} />

            <LinkButton to={`/user/profile/${id}/draftposts`} title={"Drafts Posts"} />

            <LinkButton to={`/user/profile/${id}/draftcomments`} title={"Draft Comments"} />

            <LinkButton to={`/user/profile/${id}/accountcredit`} title={"Account Credit"} />


            <Route path={`/user/profile/${id}/data`} component={() => <ProfileData {...this.props} />} />

            <Route path={`/user/profile/${id}/draftposts`}component={() => <DraftPosts {...this.props} />} />

            <Route path={`/user/profile/${id}/draftcomments`} component={() => <DraftComments {...this.props} />} />

            <Route path={`/user/profile/${id}/accountcredit`} component={() => <AddAccountCredit {...this.props} />} />
          </div>
        </Router>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    draftPosts: state.draftPosts,
    draftComments: state.draftComments
  }
}

export default connect(mapStateToProps)(UserProfile);