import {
  GET_ALL_POSTS,
  GET_POST_BY_ID,
  GET_COMMENT_BY_POST_ID,
  // GET_ALL_APPROVED_COMMENTS,
  // GET_PENDING_COMMENTS,
  // ADD_POST,
  // ADD_COMMENT,
}
  from '../actions/actions.js'

const postReducer = (state = {
  items: [], detailedItem: {}, comments: []
}, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return { ...state, items: action.payload }
    case GET_POST_BY_ID:
      console.log("REDUCERS - GET_POST_BY_ID", action.payload)
      return { ...state, detailedItem: action.payload }
    case GET_COMMENT_BY_POST_ID:
      return { ...state, comments: action.payload }
    default:
      return state
  }
}

export default postReducer