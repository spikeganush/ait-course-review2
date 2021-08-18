import {
  GET_COURSE,
  GET_COURSES,
  GET_ALL_COURSES,
  UPLOAD_PHOTO,
  UPDATE_COURSE,
  ADD_COURSE,
} from '../actions/course.action'

const initialState = {}

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COURSE:
      return action.payload
    case GET_COURSES:
      return action.payload
    case GET_ALL_COURSES:
      return action.payload
    case UPLOAD_PHOTO:
      return {
        ...state,
        photo: action.payload,
      }
    case UPDATE_COURSE:
      return state.map((course) => {
        if (course._id === action.payload.id) {
          return {
            ...course,
            title: action.payload.title,
            code: action.payload.code,
            summarize: action.payload.summarize,
            description: action.payload.description,
            photo: action.payload.photo,
          }
        } else return course
      })
    case ADD_COURSE:
      return {
        ...state,
        title: action.payload.title,
        code: action.payload.code,
        summarize: action.payload.summarize,
        description: action.payload.description,
        photo: action.payload.photo,
      }

    default:
      return state
  }
}
