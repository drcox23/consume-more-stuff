import {
  GET_ALL_POSTS,
  GET_POST_BY_ID,
  GET_COMMENTS_BY_POST_ID,
  GET_USER_BY_ID,
  GET_DRAFTPOSTS_BY_USER_ID,
  GET_DRAFTCOMMENTS_BY_USER_ID,
  ADD_NEW_POST,
  GET_ALL_TYPES,
  ADD_MORE_CREDIT,
  ADD_NEW_DRAFT_POST,
  GET_DRAFTPOST_BY_POST_ID,
  ADD_USER,
  GET_ALL_POSTS_AFTER_ARCHIVE,
  GET_COMMENTS_BY_USER_ID,
  ADD_DRAFT_COMMENT,
  // GET_ALL_APPROVED_COMMENTS,
  // GET_PENDING_COMMENTS,
  // ADD_POST,
  ADD_COMMENT
}
  from '../actions/actions.js'

const postReducer = (state = {
  items: [], detailedItem: {}, comments: [], user: {}, draftPosts: [], draftComments: [], form: {}, type: [], detailedDraftPost: {}, detailedDraftComment: {}, userComments: []
}, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return { ...state, items: action.payload }
    case GET_POST_BY_ID:
      return { ...state, detailedItem: action.payload }
    case GET_COMMENTS_BY_POST_ID:
      return { ...state, comments: action.payload }
    case GET_COMMENTS_BY_USER_ID:
      return { ...state, userComments: action.payload }
    case GET_USER_BY_ID:
      return { ...state, user: action.payload}
    case GET_DRAFTPOSTS_BY_USER_ID:
      return { ...state, draftPosts: action.payload }
    case GET_DRAFTPOST_BY_POST_ID:
      return { ...state, detailedDraftPost: action.payload }
    case GET_DRAFTCOMMENTS_BY_USER_ID:
      return { ...state, draftComments: action.payload }
    case GET_ALL_TYPES:
      return { ...state, type: action.payload}
    case ADD_NEW_POST:
      console.log("REDUCERS - ADD_NEW_POST", action.payload)
      return { ...state, form: action.payload }
    case ADD_MORE_CREDIT:
      return { ...state, user: action.payload}
    case ADD_NEW_DRAFT_POST:
      return { ...state, draftPosts: action.payload }
    case ADD_USER:
      return { ...state, user: action.payload}
    case ADD_COMMENT:
      return { ...state, form: action.payload}
    case GET_ALL_POSTS_AFTER_ARCHIVE:
      return { ...state, items: state.items.filter(element => element.id !== action.payload) }
    case ADD_DRAFT_COMMENT:
      return { ...state, form: action.payload} 
    default:
      return state
  }
}

export default postReducer