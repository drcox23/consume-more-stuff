import React, { Component } from 'react';
import { connect } from 'react-redux';

import './UserProfile.css';

class UserProfile extends Component {
    constructor(props) {
      super(props);
  
    }

    getDraftPost = (id) => {
        this.props.dispatch(
            getDraftPost(id)
        )
    }
  
    render() {

      return (
        <div className="detailedPage">
            <div className="postDetail">
                <Post detailedItem={detailedItem} />
            </div>

             <div className="comments">
                <Comments comments={comments} />
            </div>
        </div>
      )
    }
  }
  
  const mapStateToProps = state => {
  
    return {
    }
  }
  
  export default connect(mapStateToProps)(UserProfile);