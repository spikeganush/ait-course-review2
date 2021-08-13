import { combineReducers } from 'redux'
import userReducer from './user.reducer'
import usersReducer from './users.reducer'
import errorReducer from './error.reducer'
import courseReducer from './course.reducer'
import subjectReducer from './subject.reducer'

export default combineReducers({
  userReducer,
  usersReducer,
  courseReducer,
  subjectReducer,
  errorReducer,
})
