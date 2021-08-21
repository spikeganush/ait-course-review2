import React, { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  deleteReviewSubject,
  editReviewSubject,
} from '../actions/subject.actions'
import { UidContext } from './AppContext'
import ReactStars from 'react-stars'

const EditDeleteReviewSubject = ({ review, subjectId }) => {
  const [isAuthor, setIsAuthor] = useState(false)
  const [edit, setEdit] = useState(false)
  const [text, setText] = useState('')
  const [stars, setStars] = useState(3)
  const uid = useContext(UidContext)
  const dispatch = useDispatch()

  const handleEdit = (e) => {
    e.preventDefault()

    if (text) {
      dispatch(editReviewSubject(subjectId, review._id, text, stars))
      setText('')
      setEdit(false)
    }
  }

  const handleDelete = () => {
    dispatch(deleteReviewSubject(subjectId, review._id))
  }

  useEffect(() => {
    const checkAuthor = () => {
      if (uid === review.reviewerId) {
        setIsAuthor(true)
      }
    }
    checkAuthor()
  }, [uid, review.reviewerId])

  return (
    <div className="edit-delete">
      {isAuthor && edit === false && (
        <span onClick={() => setEdit(!edit)}>
          <img
            src="../img/icons/edit.svg"
            className="edit-icon"
            alt="edit-icon"
          />
        </span>
      )}
      {isAuthor && edit && (
        <form action="" onSubmit={handleEdit} className="edit-review-form">
          <label htmlFor="text" onClick={() => setEdit(!edit)}>
            Edit
          </label>
          <br />
          <textarea
            required
            id="text"
            col="35"
            rows="5"
            defaultValue={review.reviewText}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <br />
          <ReactStars
            size={40}
            value={review.reviewMark}
            edit={true}
            onChange={(newValue) => setStars(newValue)}
          />
          <div className="button-edit-area">
            <span
              onClick={() => {
                if (
                  window.confirm(
                    'Are you sure you want to delete your review ?'
                  )
                ) {
                  handleDelete()
                }
              }}
            >
              <img
                src="../img/icons/trash.svg"
                className="edit-icon"
                alt="trash-icon"
              />
            </span>
            <input type="submit" value="Validate modification" />
          </div>
          <span className="cancel" onClick={() => setEdit(!edit)}>
            Cancel
          </span>
        </form>
      )}
    </div>
  )
}

export default EditDeleteReviewSubject
