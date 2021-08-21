import {
  GET_SUBJECTS,
  GET_ALL_SUBJECTS,
  GET_SUBJECT,
  UPLOAD_PHOTO,
  UPDATE_SUBJECT,
  ADD_SUBJECT,
  DELETE_REVIEW_SUBJECT,
  EDIT_REVIEW_SUBJECT,
} from '../actions/subject.actions'

const initialState = {}

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SUBJECTS:
      return action.payload
    case GET_ALL_SUBJECTS:
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
    case DELETE_REVIEW_SUBJECT:
      return state.map((subject) => {
        if (subject._id === action.payload.subjectId) {
          return {
            ...subject,
            reviews: subject.reviews.filter(
              (review) => review._id !== action.payload.reviewId
            ),
          }
        } else return subject
      })
    case EDIT_REVIEW_SUBJECT:
      return state.map((subject) => {
        if (subject._id === action.payload.subjectId) {
          return {
            ...subject,
            reviews: subject.reviews.map((review) => {
              if (review._id === action.payload.reviewId) {
                return {
                  ...review,
                  reviewText: action.payload.text,
                  reviewMark: action.payload.stars,
                }
              } else {
                return review
              }
            }),
          }
        } else return subject
      })

    default:
      return state
  }
}
