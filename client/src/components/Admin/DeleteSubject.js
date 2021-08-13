import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteSubject, getSubjects } from '../../actions/subject.actions'

const DeleteCourse = (props) => {
  const dispatch = useDispatch()
  const deleteQuote = () => dispatch(deleteSubject(props.id))
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        if (window.confirm('Are you sure you want to delete this subject?')) {
          deleteQuote()
          dispatch(getSubjects())
        }
      }}
    >
      Delete
    </button>
  )
}

export default DeleteCourse
