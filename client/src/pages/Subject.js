import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSubject, addReview } from '../actions/subject.actions'
import ReactStars from 'react-stars'
import CardReviewsSubjects from '../components/CardReviewsSubjects'
import { isEmpty } from '../components/Utils'

const Subject = () => {
  const subjectData = useSelector((state) => state.subjectReducer)
  const userData = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()
  const { id } = useParams()
  const [leaveReview, setLeaveReview] = useState(false)
  const [readReview, setReadReview] = useState(false)

  const subjectMarks = !isEmpty(subjectData._id)
    ? subjectData.reviews.map((review) => review.reviewMark)
    : 0

  const totalMark = !isEmpty(subjectData._id)
    ? subjectMarks.reduce((prev, cur) => prev + cur, 0)
    : 0

  const [review, setReview] = useState('')
  const [stars, setStars] = useState(3)

  useEffect(() => {
    dispatch(getSubject(id))
  }, [dispatch, id])

  const handleReview = (e) => {
    e.preventDefault()

    if (review) {
      dispatch(
        addReview(id, userData._id, userData.username, review, stars)
      ).then(() => {
        dispatch(getSubject(id))
        setReview('')
        setStars(3)
        setLeaveReview(false)
        setReadReview(true)
      })
    }
  }

  return (
    <div className="center-course">
      <div className="column2">
        <img
          src={__dirname + subjectData.photo}
          alt="subject"
          className="course-photo"
        />
        <h3>{subjectData.title}</h3>
        <p>{subjectData.description}</p>
        <div className="star-ranking">
          <ReactStars
            size={40}
            value={totalMark / subjectMarks.length}
            edit={false}
          />
          <div className="number-ranking">
            {subjectData.reviews
              ? subjectData.reviews.length > 0 && (
                  <div
                    className="read-review"
                    onClick={() => setReadReview(!readReview)}
                  >
                    ({subjectData.reviews.length}) Read
                  </div>
                )
              : '(0)'}
          </div>
        </div>
        <span onClick={() => setLeaveReview(!leaveReview)}>Leave a review</span>
        {leaveReview ? (
          userData._id ? (
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
          ) : (
            <p>You have to be login to leave a review.</p>
          )
        ) : null}

        {readReview && <CardReviewsSubjects review={subjectData} />}
      </div>
    </div>
  )
}

export default Subject
