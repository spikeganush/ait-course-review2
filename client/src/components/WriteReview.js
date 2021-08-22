import React, { useContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addReview, getCourse } from '../actions/course.action'
import ReactStars from 'react-stars'
import { UidContext } from '../components/AppContext'

const WriteReview = ({ courseData, userId, userName }) => {
  const [leaveReview, setLeaveReview] = useState(false)
  const [review, setReview] = useState('')
  const [stars, setStars] = useState(3)
  const uid = useContext(UidContext)
  const dispatch = useDispatch()

  const handleReview = (e) => {
    e.preventDefault()

    if (review) {
      dispatch(addReview(courseData._id, userId, userName, review, stars)).then(
        () => {
          dispatch(getCourse(courseData._id))
          setReview('')
          setStars(3)
          setLeaveReview(false)
        }
      )
    }
  }

  return (
    <>
      {uid ? (
        <span onClick={() => setLeaveReview(!leaveReview)}>Leave a review</span>
      ) : null}

      {leaveReview ? (
        <form action="" onSubmit={handleReview} className="write-review">
          <label htmlFor="reviewText">Your review</label>
          <textarea
            required
            id="reviewText"
            value={review}
            placeholder="Write your review"
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
          <p>Your note</p>
          <ReactStars
            size={40}
            value={3}
            edit={true}
            onChange={(newValue) => setStars(newValue)}
          />
          <input type="submit" value="Send" />
        </form>
      ) : null}
    </>
  )
}

export default WriteReview
