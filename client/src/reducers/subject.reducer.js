import {
  GET_SUBJECTS,
  GET_SUBJECT,
  UPLOAD_PHOTO,
  UPDATE_SUBJECT,
  ADD_SUBJECT,
} from '../actions/subject.actions'

const initialState = {}

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SUBJECTS:
      return action.payload
    case GET_SUBJECT:
      return action.payload
    case UPLOAD_PHOTO:
      return {
        ...state,
        photo: action.payload,
      }
    case UPDATE_SUBJECT:
      return {
        ...state,
        title: action.payload.title,
        code: action.payload.code,
        course: action.payload.course,
        summarize: action.payload.summarize,
        description: action.payload.description,
      }
    case ADD_SUBJECT:
      return {
        ...state,
        title: action.payload.title,
        code: action.payload.code,
        course: action.payload.course,
        summarize: action.payload.summarize,
        description: action.payload.description,
        photo: action.payload.photo,
      }

    default:
      return state
  }
}
