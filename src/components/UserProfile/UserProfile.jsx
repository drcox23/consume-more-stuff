import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

//Components
import ProfileData from './ProfileData/ProfileData.jsx';
import DraftPosts from './DraftPosts/DraftPost.jsx';
import DraftComments from './DraftComments/DraftComments.jsx';
import AddAccountCredit from './AddAccountCredit/AddAccountCredit.jsx';

//Actions
import { getAll, addMoreCredit } from '../../actions/actions.js';

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
    this.state = {
      form: {

      }
    }
  }

  componentDidMount() {
    console.log("PROPS WHEN LOADING", this.props)
    const { nickname } = jwtDecode(localStorage.getItem('id_token'))
    this.props.dispatch(getAll(nickname))

    // this.props.dispatch(
    //     getAllUserProfileData()
    // )
  }


  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    if(!value) {
      this.state.form[name] = parseFloat(this.props.user.account_credit) + 0;
    } else {
      this.state.form[name] = parseFloat(this.props.user.account_credit) + parseFloat(value);
    }
    console.log("On Change - handleChange this.state.form:", this.state.form)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log('\n Submitted!!:', this.state.form);
    // console.log('\n AddCreditForm:', this.state.form)
    this.props.dispatch(
      addMoreCredit(this.props.user.id, this.state.form)
    );
  }

  render() {
    const { id } = this.props.user;
    console.log(this.props, ' SUP BOIEEE')
    return (
      <div id="userProfileContainer">
        {/* <Router> */}
          <div className="userProfileNav">
            <LinkButton to={`/user/profile/${id}/data`} title={"My Profile"} />

            <LinkButton to={`/user/profile/${id}/draftposts`} title={"Drafts Posts"} />

            <LinkButton to={`/user/profile/${id}/draftcomments`} title={"Draft Comments"} />

            <LinkButton to={`/user/profile/${id}/accountcredit`} title={"Account Credit"} />


            <Route path={`/user/profile/${id}/data`} component={() => <ProfileData {...this.props} />} />

            <Route path={`/user/profile/${id}/draftposts`}component={() => <DraftPosts {...this.props} />} />

            <Route path={`/user/profile/${id}/draftcomments`} component={() => <DraftComments {...this.props} />} />

            <Route path={`/user/profile/${id}/accountcredit`} component={() => <AddAccountCredit {...this.props} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />} />
          </div>
        {/* </Router> */}

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