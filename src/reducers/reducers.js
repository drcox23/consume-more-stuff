import {
  GET_ALL_POSTS,
  // GET_ALL_APPROVED_COMMENTS,
  // GET_PENDING_COMMENTS,
  // ADD_POST,
  // ADD_COMMENT
}
from '../actions/actions.js'

const postReducer = (state = [], action) => {
  console.log('REDUCER ACTION');

  switch (action.type) {
    case GET_ALL_POSTS:
      console.log('GET_ALL_POSTS reducer', action.payload)
      return action.payload
    default:
      return state
  }
}

export default postReducer