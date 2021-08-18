import axios from 'axios'

export const GET_SUBJECT = 'GET_SUBJECT'
export const GET_SUBJECTS = 'GET_SUBJECTS'
export const GET_ALL_SUBJECTS = 'GET_ALL_SUBJECTS'
export const UPLOAD_PHOTO = 'UPLOAD_PHOTO'
export const UPDATE_SUBJECT = 'UPDATE_SUBJECT'
export const ADD_SUBJECT = 'ADD_SUBJECT'
export const DELETE_SUBJECT = 'DELETE_SUBJECT'

export const GET_SUBJECT_ERRORS = 'GET_SUBJECT_ERRORS'

export const getSubject = (sid) => {
  return (dispatch) => {
    return axios
      .get(`/api/subject/${sid}`)
      .then((res) => {
        dispatch({ type: GET_SUBJECT, payload: res.data })
      })
      .catch((err) => console.log(err))
  }
}

export const getSubjects = (num) => {
  return (dispatch) => {
    return axios
      .get(`/api/subject`)
      .then((res) => {
        const array = res.data.slice(0, num)
        dispatch({ type: GET_SUBJECTS, payload: array })
      })
      .catch((err) => console.log(err))
  }
}

export const getAllSubjects = () => {
  return (dispatch) => {
    return axios
      .get(`/api/subject`)
      .then((res) => {
        dispatch({ type: GET_ALL_SUBJECTS, payload: res.data })
      })
      .catch((err) => console.log(err))
  }
}

export const uploadPhoto = (data, id) => {
  return (dispatch) => {
    return axios
      .post(`/api/subject/upload`, data)
      .then((res) => {
        if (res.data.errors) {
          dispatch({ type: GET_SUBJECT_ERRORS, payload: res.data.errors })
        } else {
          dispatch({ type: GET_SUBJECT_ERRORS, payload: '' })
          return axios.get(`/api/subject/${id}`).then((res) => {
            dispatch({ type: UPLOAD_PHOTO, payload: res.data.photo })
          })
        }
      })
      .catch((err) => console.log(err))
  }
}

export const updateSubject = (
  subjectId,
  title,
  code,
  subject,
  summarize,
  description
) => {
  return (dispatch) => {
    return axios({
      //${process.env.REACT_APP_API_URL}
      method: 'put',
      url: `/api/subject/${subjectId}`,
      data: { title, code, subject, summarize, description },
    })
      .then((res) => {
        dispatch({
          type: UPDATE_SUBJECT,
          payload: title,
          code,
          subject,
          summarize,
          description,
        })
      })
      .catch((err) => console.log(err))
  }
}

export const addSubject = (data) => {
  return (dispatch) => {
    return axios.post(`/api/subject`, data).then((res) => {
      if (res.data.erros) {
        dispatch({ type: GET_SUBJECT_ERRORS, payload: res.data.errors })
      } else {
        dispatch({ type: GET_SUBJECT_ERRORS, payload: '' })
      }
    })
  }
}

export const deleteSubject = (subjectId) => {
  return (dispatch) => {
    return axios({
      method: 'delete',
      url: `/api/subject/${subjectId}`,
    })
      .then((res) => {
        dispatch({ type: DELETE_SUBJECT, payload: { subjectId } })
      })
      .catch((err) => console.log(err))
  }
}
