import axios from 'axios'

export const GET_USER = 'GET_USER'
export const UPLOAD_PICTURE = 'UPLOAD_PICTURE'
export const UPDATE_BIO = 'UPDATE_BIO'
export const UPDATE_EMAIL = 'UPDATE_EMAIL'
export const UPDATE_ADMIN = 'UPDATE_ADMIN'

export const GET_USER_ERRORS = 'GET_USER_ERRORS'

export const getUser = (uid) => {
  return (dispatch) => {
    return axios
      .get(`/api/user/${uid}`)
      .then((res) => {
        dispatch({ type: GET_USER, payload: res.data })
      })
      .catch((err) => console.log(err))
  }
}

export const uploadPicture = (data, id) => {
  return (dispatch) => {
    return axios
      .post(`/api/user/upload`, data)
      .then((res) => {
        if (res.data.errors) {
          dispatch({ type: GET_USER_ERRORS, payload: res.data.errors })
        } else {
          dispatch({ type: GET_USER_ERRORS, payload: '' })
          return axios.get(`/api/user/${id}`).then((res) => {
            dispatch({ type: UPLOAD_PICTURE, payload: res.data.picture })
          })
        }
      })
      .catch((err) => console.log(err))
  }
}

export const updateBio = (userId, bio) => {
  return (dispatch) => {
    return axios({
      //${process.env.REACT_APP_API_URL}
      method: 'put',
      url: `/api/user/${userId}`,
      data: { bio },
    })
      .then((res) => {
        dispatch({ type: UPDATE_BIO, payload: bio })
      })
      .catch((err) => console.log(err))
  }
}

export const updateEmail = (userId, email) => {
  return (dispatch) => {
    return axios({
      //${process.env.REACT_APP_API_URL}
      method: 'put',
      url: `/api/user/email/${userId}`,
      data: { email },
    })
      .then((res) => {
        dispatch({ type: UPDATE_EMAIL, payload: email })
      })
      .catch((err) => console.log(err))
  }
}

export const updateAdmin = (userId, admin) => {
  return (dispatch) => {
    return axios({
      //${process.env.REACT_APP_API_URL}
      method: 'put',
      url: `/api/user/${userId}`,
      data: { admin },
    })
      .then((res) => {
        dispatch({ type: UPDATE_ADMIN, payload: admin })
      })
      .catch((err) => console.log(err))
  }
}
