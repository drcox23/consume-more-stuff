import axios from 'axios';

export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const ADD_POST = 'ADD_POST';
export const ADD_COMMENT = 'ADD_COMMENT';
export const GET_ALL_APPROVED_COMMENTS = 'GET_ALL_APPROVED_COMMENTS' //get all approved comments by id for a particular post
export const GET_PENDING_COMMENTS = 'GET_PENDING_COMMENTS' // get all pending comments needing approval for a post.
export const GET_POST_BY_ID = 'GET_POST_BY_ID';
export const GET_COMMENTS_BY_POST_ID = 'GET_COMMENT_BY_POST_ID';
export const GET_USER_BY_ID = 'GET_USER_BY_ID';
export const GET_DRAFTPOSTS_BY_USER_ID = 'GET_DRAFTPOSTS_BY_USER_ID';
export const GET_DRAFTCOMMENTS_BY_USER_ID = 'GET_DRAFTCOMMENTS_BY_USER_ID';

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

export const getAll = (nickname) => {
  return dispatch => {
    let id = ''
    axios
      .get('/home')
      .then(response => {
        dispatch({
          type: GET_ALL_POSTS,
          payload: response.data
        })
        return axios.get(`/user-profile/email/${nickname}`)
      })
      .then(response => {
        id = response.data.id;
        console.log("MY ID PLEASE", response);
        return axios.get(`/user-profile/${id}`)
      })
      .then(response => {
        dispatch({
          type: GET_USER_BY_ID,
          payload: response.data
        })
        return axios.get(`/post-draft/${id}`)
      })
      .then(response => {
        dispatch({
          type: GET_DRAFTPOSTS_BY_USER_ID,
          payload: response.data
        })
        return axios.get(`/comment-draft/${id}`)
      })
      .then(response => {
        dispatch({
          type: GET_DRAFTCOMMENTS_BY_USER_ID,
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
            type: GET_COMMENTS_BY_POST_ID,
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

export const getAllUserProfileData = (id) => {
  return dispatch => [
    axios
      .get()
  ]
}
