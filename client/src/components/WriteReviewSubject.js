import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addReview, getSubject } from '../actions/subject.actions'
import ReactStars from 'react-stars'

const WriteReviewSubject = ({ subjectData, userId, userName }) => {
  const [leaveReview, setLeaveReview] = useState(false)
  const [review, setReview] = useState('')
  const [stars, setStars] = useState(3)
  const dispatch = useDispatch()

  const handleReview = (e) => {
    e.preventDefault()

    if (review) {
      dispatch(
        addReview(subjectData._id, userId, userName, review, stars)
      ).then(() => {
        dispatch(getSubject(subjectData._id))
        setReview('')
        setStars(3)
        setLeaveReview(false)
      })
    }
  }

  return (
    <>
      <span onClick={() => setLeaveReview(!leaveReview)}>Leave a review</span>
      {leaveReview ? (
        <form action="" onSubmit={handleReview} className="write-review">
          <label htmlFor="reviewText">Your review</label>
          <textarea
            required
            id="reviewText"
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

export default WriteReviewSubject
