import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './MyPosts.css';
import { connect } from 'react-redux';
import Posts from '../../PostsBoard/posts/posts.jsx'
import { getPostandCommentsById, getAllPosts } from '../../../actions/actions.js';

class MyPosts extends Component {
  constructor(props) {
    super(props);
  }

  getPostandCommentsById = (props) => {
    this.props.dispatch(
      getPostandCommentsById(props),
    )
  }

  checkForParentComponent = () => {
    if (this.props.auth) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    const user = this.props.user;
    const auth = this.props.auth;
    const items = this.props.items.filter(posts => user.id === posts.user_id);
    console.log("MyPosts - items:", items);
    console.log("user.id:", user.id);
    console.log("")

    return (
      <div>
        <Posts props={this.props} auth={auth} items={items} getPostandCommentsById={this.getPostandCommentsById} />
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    items: state.items,
    user: state.user
  }
}

export default connect(mapStateToProps)(MyPosts);

