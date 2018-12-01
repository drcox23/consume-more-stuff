import axios from 'axios';
// import Auth from '../../Auth/Auth.js';

export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const ADD_NEW_POST = 'ADD_NEW_POST';
export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_MORE_CREDIT = 'ADD_MORE_CREDIT';
export const ADD_NEW_DRAFT_POST = 'ADD_NEW_DRAFT_POST';
export const GET_ALL_APPROVED_COMMENTS = 'GET_ALL_APPROVED_COMMENTS' //get all approved comments by id for a particular post
export const GET_PENDING_COMMENTS = 'GET_PENDING_COMMENTS' // get all pending comments needing approval for a post.
export const GET_POST_BY_ID = 'GET_POST_BY_ID';
export const GET_COMMENTS_BY_POST_ID = 'GET_COMMENT_BY_POST_ID';
export const GET_COMMENTS_BY_USER_ID = 'GET_COMMENT_BY_USER_ID';
export const GET_USER_BY_ID = 'GET_USER_BY_ID';
export const GET_DRAFTPOSTS_BY_USER_ID = 'GET_DRAFTPOSTS_BY_USER_ID';
export const GET_DRAFTCOMMENTS_BY_USER_ID = 'GET_DRAFTCOMMENTS_BY_USER_ID';
export const GET_ALL_TYPES = 'GET_ALL_TYPES';
export const GET_DRAFTPOST_BY_POST_ID = 'GET_DRAFTPOST_BY_POST_ID';
export const ADD_USER = 'ADD_USER';
export const GET_AFTER_ARCHIVE = "GET_AFTER_ARCHIVE";
export const ADD_DRAFT_COMMENT = 'ADD_DRAFT_COMMENT'

// const auth = new Auth();

export const getAllPosts = () => {
  return dispatch => {
    axios
      .get('/home')
      .then(response => {
        dispatch({
          type: GET_ALL_POSTS,
          payload: response.data
        })
        .then(response => {
          // console.log('check JWT', auth.getGreeting())
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

export const getAll = (name) => {
  return dispatch => {
    let id = ''
    axios
      .get('/home')
      .then(response => {
        dispatch({
          type: GET_ALL_POSTS,
          payload: response.data
        })
        return axios.get(`/user-profile/get/${name}`)
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
        return axios.get(`/type`)
      })
      .then(response => {
        dispatch({
          type: GET_ALL_TYPES,
          payload: response.data
        })
        return axios.get(`/mycomments/${id}`)
      })
      .then(response => {
        dispatch({
          type: GET_COMMENTS_BY_USER_ID,
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

// get comment draft by ID
export const getDraftCommentAndPostById = (id, draftId) => {
  return dispatch => {
    axios
      .get(`/comment-draft/${id}/${draftId}`)
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

// export const getAllUserProfileData = (id) => {
//   return dispatch => [
//     axios
//       .get()
//   ]
// }

export const getTypeData = (email) => {
  let id = "";

  return dispatch => {
    axios
    .get(`/type`)
    .then(response => {
      dispatch({
        type: GET_ALL_TYPES,
        payload: response.data
      })
      return axios.get(`/user-profile/get/${email}`)
    })
    .then(response => {
      id = response.data.id;
      console.log("Id:", id)
      return axios.get(`/user-profile/${id}`)
    })
    .then(response => {
      dispatch({
        type: GET_USER_BY_ID,
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

export const getTypeAndDraftPostData = (id, name) => {
  return dispatch => {
    axios
      .get('/type')
      .then(response => {
        dispatch({
          type: GET_ALL_TYPES,
          payload: response.data
        })
        return axios.get(`/post-draft/post/${id}`)
      })
      .then(response => {
        dispatch({
          type: GET_DRAFTPOST_BY_POST_ID,
          payload: response.data
        })
        return axios.get(`/user-profile/get/${name}`)
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
      })
      .catch(err => {
        dispatch({
          type: "DISPLAY_ERROR_NOTIFICATION",
          err
        });
      });
  }
}

// add new comment action
export const addNewComment = (newComment) => {
  console.log("\nCheck newComment:", newComment);

  return dispatch => {
    axios
      .post('/add-new-comment', newComment)
      .then(response => {
        console.log("response.data:", response.data)
        dispatch({
          type: ADD_COMMENT,
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

// add new draft comment action
export const addNewCommentDraft = (draftComment) => {
  console.log("\nCheck newComment:", draftComment);

  return dispatch => {
    axios
      .post('/save-comment', draftComment)
      .then(response => {
        console.log("response.data:", response.data)
        dispatch({
          type: ADD_DRAFT_COMMENT,
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

export const addNewDraftPost = (postfromNewRequest) => {

  return dispatch => {
    axios
      .post('/save-post', postfromNewRequest)
      .then(response => {
        dispatch({
          type: ADD_NEW_DRAFT_POST,
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

export const addNewPostFromDraft = (id, body) => {
  return dispatch => {
    axios
      .post(`/post-draft/add-new-post/${id}`, body)
      .then(response => {
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

export const editDraftPost = (id, body) => {
  return dispatch => {
    axios
      .put(`/post-draft/edit-post/${id}`, body)
      .then(response => {
        dispatch({
          type: GET_DRAFTPOST_BY_POST_ID,
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

export const addUserToDB = (info) => {
  return dispatch => {
    let email = info.name;
    
    axios
      .get(`/user-profile/get/${email}`)
      .then(response => {
        console.log("can i see the response", response)
        if(response.data === null){
          axios.post(`/user-profile/email/${email}`, info)
          .then(response => {
            console.log("response.data:", response.data)
            dispatch({
              type: ADD_USER,
              payload: response.data
            })
          })
        }else{
          console.log("user already exists")
        }
      })
      .catch(err => {
        dispatch({
          type: "DISPLAY_ERROR_NOTIFICATION",
          err
        })
      })
  }
}

export const deleteFromDraft = (id, user_id) => {
  return dispatch => {
    axios
      .delete(`/post-draft/delete/${id}/${user_id}`)
      .then(response => {
        dispatch({
          type: GET_DRAFTPOSTS_BY_USER_ID,
          payload: response.data
        })
      })
  }
}

export const archive = (id) => {
  return dispatch => {
    axios
      .delete(`/archive/post/${id}`)
      .then(() => {
        dispatch ({
          type: GET_AFTER_ARCHIVE,
          payload: id
        })
      })
      .catch(err => console.log("err:", err));
  }
}