import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteCourse, getCourses } from '../../actions/course.action'

const DeleteCourse = (props) => {
  const dispatch = useDispatch()
  const deleteQuote = () => dispatch(deleteCourse(props.id))
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        if (window.confirm('Are you sure you want to delete this course?')) {
          deleteQuote()
          dispatch(getCourses())
        }
      }}
    >
      Delete
    </button>
  )
}

export default DeleteCourse
