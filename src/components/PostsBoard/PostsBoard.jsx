import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './PostsBoard.css';
import { connect } from 'react-redux';
import Posts from './posts/posts.jsx';
import { getPostandCommentsById, getAllPosts } from '../../actions/actions.js';
import { Dashboard2s } from '../UserProfile/DashboardLinks/DashboardLinks.jsx';

class PostsBoard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.dispatch(getAllPosts())
  }

  getPostandCommentsById = (props) => {
    this.props.dispatch(
      getPostandCommentsById(props),
    )
  }

  render() {
    const { items } = this.props;
    const match = this.props.match.path;

    return (
      <div className="postsBoard">

        <div id="postings-section">
          <div id="postings-section-title">All Postings</div>

          <Posts props={this.props} match={match} items={items} getPostandCommentsById={this.getPostandCommentsById} />

          <Route path="/dashboard2s" component={Dashboard2s} />

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(PostsBoard);