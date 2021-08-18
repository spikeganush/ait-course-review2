import axios from 'axios'

export const GET_COURSE = 'GET_COURSE'
export const GET_ALL_COURSES = 'GET_ALL_COURSES'
export const GET_COURSES = 'GET_COURSES'
export const ADD_COURSE = 'ADD_COURSE'
export const UPLOAD_PHOTO = 'UPLOAD_PHOTO'
export const UPDATE_COURSE = 'UPDATE_COURSE'
export const DELETE_COURSE = 'DELETE_COURSE'

export const GET_COURSE_ERRORS = 'GET_COURSE_ERRORS'

export const getCourse = (cid) => {
  return (dispatch) => {
    return axios
      .get(`/api/course/${cid}`)
      .then((res) => {
        dispatch({ type: GET_COURSE, payload: res.data })
      })
      .catch((err) => console.log(err))
  }
}

export const getCourses = (num) => {
  return (dispatch) => {
    return (
      axios
        //${process.env.REACT_APP_API_URL}
        .get(`/api/course`)
        .then((res) => {
          const array = res.data.slice(0, num)
          dispatch({ type: GET_COURSES, payload: array })
        })
        .catch((err) => console.log(err))
    )
  }
}

export const getAllCourses = () => {
  return (dispatch) => {
    return (
      axios
        //${process.env.REACT_APP_API_URL}
        .get(`/api/course`)
        .then((res) => {
          dispatch({ type: GET_ALL_COURSES, payload: res.data })
        })
        .catch((err) => console.log(err))
    )
  }
}

export const addCourse = (data) => {
  return (dispatch) => {
    return axios.post(`/api/course`, data).then((res) => {
      if (res.data.erros) {
        dispatch({ type: GET_COURSE_ERRORS, payload: res.data.errors })
      } else {
        dispatch({ type: GET_COURSE_ERRORS, payload: '' })
      }
    })
  }
}

export const updateCourse = (courseId, data) => {
  return (dispatch) => {
    return axios
      .put(`/api/course/${courseId}`, data)
      .then((res) => {
        dispatch({ type: UPDATE_COURSE, payload: { data, courseId } })
      })
      .catch((err) => console.log(err))
  }
}

export const deleteCourse = (courseId) => {
  return (dispatch) => {
    return axios({
      method: 'delete',
      url: `/api/course/${courseId}`,
    })
      .then((res) => {
        dispatch({ type: DELETE_COURSE, payload: { courseId } })
      })
      .catch((err) => console.log(err))
  }
}

export const uploadPhoto = (data, id) => {
  return (dispatch) => {
    return axios
      .post(`/api/course/upload`, data)
      .then((res) => {
        if (res.data.errors) {
          dispatch({ type: GET_COURSE_ERRORS, payload: res.data.errors })
        } else {
          dispatch({ type: GET_COURSE_ERRORS, payload: '' })
          return axios.get(`/api/course/${id}`).then((res) => {
            dispatch({ type: UPLOAD_PHOTO, payload: res.data.photo })
          })
        }
      })
      .catch((err) => console.log(err))
  }
}
