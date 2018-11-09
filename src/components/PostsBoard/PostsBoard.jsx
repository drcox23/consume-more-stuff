import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './PostsBoard.css';

class PostsBoard extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log("\nPostsBoards - props:", this.props);
    return (
      <div class="postsBoard">
        <div class="posting">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse erat dolor, finibus ac eros sed, feugiat facilisis leo. Nullam mollis leo nisi, ultrices ornare libero feugiat eu. Nam nisl tellus, rhoncus aliquet venenatis in, egestas nec sapien. Duis eleifend, velit non ullamcorper lobortis, neque justo ultricies urna, at tempus orci ligula quis lorem. </p>
        </div>
        <div class="posting">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse erat dolor, finibus ac eros sed, feugiat facilisis leo. Nullam mollis leo nisi, ultrices ornare libero feugiat eu. Nam nisl tellus, rhoncus aliquet venenatis in, egestas nec sapien. Duis eleifend, velit non ullamcorper lobortis, neque justo ultricies urna, at tempus orci ligula quis lorem. </p>
        </div>
        <div class="posting">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse erat dolor, finibus ac eros sed, feugiat facilisis leo. Nullam mollis leo nisi, ultrices ornare libero feugiat eu. Nam nisl tellus, rhoncus aliquet venenatis in, egestas nec sapien. Duis eleifend, velit non ullamcorper lobortis, neque justo ultricies urna, at tempus orci ligula quis lorem. </p>
        </div>
      </div>
    )
  }
}

export default PostsBoard;