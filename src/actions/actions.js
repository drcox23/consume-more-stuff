import axios from 'axios';

export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const ADD_NEW_POST = 'ADD_NEW_POST';
export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_MORE_CREDIT = 'ADD_MORE_CREDIT';
export const GET_ALL_APPROVED_COMMENTS = 'GET_ALL_APPROVED_COMMENTS' //get all approved comments by id for a particular post
export const GET_PENDING_COMMENTS = 'GET_PENDING_COMMENTS' // get all pending comments needing approval for a post.
export const GET_POST_BY_ID = 'GET_POST_BY_ID';
export const GET_COMMENTS_BY_POST_ID = 'GET_COMMENT_BY_POST_ID';
export const GET_USER_BY_ID = 'GET_USER_BY_ID';
export const GET_DRAFTPOSTS_BY_USER_ID = 'GET_DRAFTPOSTS_BY_USER_ID';
export const GET_DRAFTCOMMENTS_BY_USER_ID = 'GET_DRAFTCOMMENTS_BY_USER_ID';
export const GET_ALL_TYPES = 'GET_ALL_TYPES';

export const getAllPosts = () => {
  return dispatch => {
    axios
      .get('http://54.201.41.199:9000/home')
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
      .get(`http://54.201.41.199:9000/post/${id}`)
      .then(response => {
        dispatch({
          type: GET_POST_BY_ID,
          payload: response.data
        })
        return axios.get(`http://54.201.41.199:9000/comments/${id}`)
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

// export const getAllUserProfileData = (id) => {
//   return dispatch => [
//     axios
//       .get()
//   ]
// }

export const getTypeData = () => {
  return dispatch => {
    axios
    .get(`/type`)
    .then(response => {
      dispatch({
        type: GET_ALL_TYPES,
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

export const addNewPost = (postfromNewRequest) => {
  console.log("\nCheck postFromNewRequest:", postfromNewRequest);

  return dispatch => {
    axios
      .post('/add-new-post', postfromNewRequest)
      .then(response => {
        console.log("response.data:", response.data)
        dispatch({
          type: ADD_NEW_POST,
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

export const addMoreCredit = (id, credit) => {
  return dispatch => {
    axios
      .put(`/add-more-credit/${id}`, credit)
      .then(response => {
        dispatch({
          type: ADD_MORE_CREDIT,
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
