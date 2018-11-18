import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
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
    // console.log('\n Submitted!!:', this.state.form);
    // console.log('\n AddCreditForm:', this.state.form)
    this.props.dispatch(
      addMoreCredit(this.props.user.id, this.state.form)
    );
  }

  render() {
    const id = this.props.user.id;
    const match = this.props.match;
    const myprops = this.props;
    console.log(this.props, 'Is user data coming through?')
    return (
      <div id="userProfileContainer">
        {/* <Router> */}
          <div className="userProfileNav">
          
            <LinkButton to={`${this.props.match.path}/${id}/data`} title={"My Profile"} />

            <LinkButton to={`${this.props.match.path}/${id}/draftposts`} title={"Drafts Posts"} />

            <LinkButton to={`${this.props.match.path}/${id}/draftcomments`} title={"Draft Comments"} />

            <LinkButton to={`${this.props.match.path}/${id}/accountcredit`} title={"Account Credit"} />

            <Redirect from={match} to={`${match.path}/${this.props.user.id}/data`}/>
            <Route path={`${match.path}/${this.props.user.id}/data`} render={(props) => <ProfileData {...props} props={myprops} />} />

            <Route path={`${this.props.match.path}/${this.props.user.id}/draftposts`} render={(props) => <DraftPosts {...props} props={myprops} />} />

            <Route path={`${this.props.match.path}/${this.props.user.id}/draftcomments`} render={(props) => <DraftComments {...props} props={myprops} />} />

            <Route path={`${this.props.match.path}/${this.props.user.id}/accountcredit`} render={(props) => <AddAccountCredit {...this.props} {...props} props={myprops} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />} />
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