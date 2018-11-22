import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './MyPosts.css';
import { connect } from 'react-redux';
import { getAllPosts } from '../../../actions/actions.js';

const MyPosts = (props) => {
  console.log("My Posts - props.props:", props.props);

  return props.props.items.filter(myPost => props.props.user.id === myPost.id).map(myPost =>
    <div key={myPost.id} className="myPost-container">
      <p className="myPost-subject">{myPost.subject}</p>
      <button>Archive</button>

    </div>

  )
}


export default MyPosts



// class MyPosts extends Component {
//   constructor(props) {
//     super(props);
//   }
//   componentDidMount = () => {
//     this.props.dispatch(getAllPosts());
//   }

//   render() {
//     const { items } = this.props;
//     console.log("what is items??: ", items);

//     return (
//       <div>{items.map}</div>
//     )



//   }
// }


// const mapStateToProps = state => {
//   return {
//     items: state.items
//   }
// }

// export default connect(mapStateToProps)(MyPosts);

