import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

//Components
import ProfileData from './ProfileData/ProfileData.jsx';
import DraftPosts from './DraftPosts/DraftPost.jsx';
import DraftComments from './DraftComments/DraftComments.jsx';
import AddAccountCredit from './AddAccountCredit/AddAccountCredit.jsx';
import EditDraftPostForm from '../forms/EditDraftPostForm.jsx';
import NotFound from '../Error/404.jsx';

//Actions
import { getAllPosts, getAll, addMoreCredit, deleteFromDraft } from '../../actions/actions.js';

//CSS
import './UserProfile.css';

const LinkButton = (props) => {
  return (
    <Link to={props.to}>
      <p className="userProfile-btns">{props.title}</p>
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
    const { name } = jwtDecode(localStorage.getItem('id_token'))
    this.props.dispatch(getAll(name))
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    if (!value) {
      this.state.form[name] = parseFloat(this.props.user.account_credit) + 0;
    } else {
      this.state.form[name] = parseFloat(this.props.user.account_credit) + parseFloat(value);
    }
    console.log("On Change - handleChange this.state.form:", this.state.form)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(
      addMoreCredit(this.props.user.id, this.state.form)
    );
    const editform = document.getElementById('addCredit-form');
    editform.reset();
  }

  deleteFromDraft = (id, user_id) => {
    this.props.dispatch(
      deleteFromDraft(id, user_id)
    )
  }

  render() {
    const id = this.props.user.id;
    const match = this.props.match.path;
    const UserProfileProps = this.props;
    return (
      <div id="userProfileContainer">
        <div className="userProfileNav">

          <LinkButton to={`${match}/${id}/data`} title={"My Profile"} />

          <LinkButton to={`${match}/${id}/draftposts`} title={"Drafts Posts"} />

          <LinkButton to={`${match}/${id}/draftcomments`} title={"Draft Comments"} />

          <LinkButton to={`${match}/${id}/accountcredit`} title={"Account Credit"} />

          <Switch>

            <Route exact path={match} render={() => <ProfileData user={UserProfileProps.user} />} />
            <Route exact path={`${match}/myprofile`} component={() => <ProfileData user={UserProfileProps.user} />} />
            <Route path={`${match}/${id}/data`} component={() => <ProfileData user={UserProfileProps.user} />} />

            <Route exact path={`${match}/mydraftposts`} render={() => <DraftPosts draftPosts={UserProfileProps.draftPosts} deleteFromDraft={this.deleteFromDraft} user={UserProfileProps.user} />} />
            <Route path={`${match}/${id}/draftposts`} render={() => <DraftPosts draftPosts={UserProfileProps.draftPosts} deleteFromDraft={this.deleteFromDraft} user={UserProfileProps.user} />} />

            <Route exact path={`${match}/mydraftcomments`} render={() => <DraftComments draftComments={UserProfileProps.draftComments} />} />
            <Route path={`${match}/${id}/draftcomments`} render={() => <DraftComments draftComments={UserProfileProps.draftComments} />} />

            <Route exact path={`${match}/accountcredit`} render={() => <AddAccountCredit {...this.props} user={UserProfileProps.user} AllProps={UserProfileProps} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />} />
            <Route path={`${match}/${id}/accountcredit`} render={() => <AddAccountCredit {...this.props} user={UserProfileProps.user} AllProps={UserProfileProps} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />} />

            <Route path='/edit/draftpost/:id' component={EditDraftPostForm} />

            <Route component={NotFound} />

          </Switch>
        </div>

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