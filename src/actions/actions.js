import axios from 'axios';

export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const ADD_POST = 'ADD_POST';
export const ADD_COMMENT = 'ADD_COMMENT';
export const GET_ALL_APPROVED_COMMENTS = 'GET_ALL_APPROVED_COMMENTS' //get all approved comments by id for a particular post
export const GET_PENDING_COMMENTS = 'GET_PENDING_COMMENTS' // get all pending comments needing approval for a post.
export const GET_POST_BY_ID = 'GET_POST_BY_ID';
export const GET_COMMENT_BY_POST_ID = 'GET_COMMENT_BY_POST_ID';

export const getAllPosts = () => {
  return dispatch => {
    axios
      .get('/home')
      .then(response => {
        dispatch({
          type: GET_ALL_POSTS,
          payload: response.data
        })
      })
      .catch(err => {
        dispatch({
          type: "DISPLAY_ERROR_NOTIFICATION",
          err
        });
      });
  }
}

export const getPostandCommentsById = (id) => {
  return dispatch => {
    axios
      .get(`/post/${id}`)
      .then(response => {
        dispatch({
          type: GET_POST_BY_ID,
          payload: response.data
        })
        return axios.get(`/comments/${id}`)
      })
      .then(response => {
          dispatch({
            type: GET_COMMENT_BY_POST_ID,
            payload: response.data
          })
      })
      .catch(err => {
        dispatch({
          type: "DISPLAY_ERROR_NOTIFICATION",
          err
        });
      });
  }
}
