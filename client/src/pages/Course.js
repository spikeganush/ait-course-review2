<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
//import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCourse, addReview } from '../actions/course.action'
import ReactStars from 'react-stars'
import CardReviews from '../components/CardReviews'
import { isEmpty } from '../components/Utils'

const Course = () => {
  const courseData = useSelector((state) => state.courseReducer)
  const userData = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()
  const { id } = useParams()
  const [leaveReview, setLeaveReview] = useState(false)
  const [readReview, setReadReview] = useState(false)

  const courseMarks = !isEmpty(courseData._id)
    ? courseData.reviews.map((review) => review.reviewMark)
    : 0

  const totalMark = !isEmpty(courseData._id)
    ? courseMarks.reduce((prev, cur) => prev + cur, 0)
    : 0

  const [review, setReview] = useState('')
  const [stars, setStars] = useState(3)

  useEffect(() => {
    dispatch(getCourse(id))
  }, [dispatch, id])

  const handleReview = (e) => {
    e.preventDefault()

    if (review) {
      dispatch(
        addReview(id, userData._id, userData.username, review, stars)
      ).then(() => {
        dispatch(getCourse(id))
        setReview('')
        setStars(3)
      })
    }
  }

  return (
    <div className="center-course">
      <div className="column2">
        <img
          src={__dirname + courseData.photo}
          alt="course"
          className="course-photo"
        />
        <h3>{courseData.title}</h3>
        <p>{courseData.description}</p>
        <div className="star-ranking">
          <ReactStars
            size={40}
            value={totalMark / courseMarks.length}
            edit={false}
          />
          <div className="number-ranking">
            {courseData.reviews
              ? courseData.reviews.length > 0 && (
                  <div
                    className="read-review"
                    onClick={() => setReadReview(!readReview)}
                  >
                    ({courseData.reviews.length}) Read
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

        {readReview && <CardReviews review={courseData} />}
      </div>
    </div>
=======
import React from 'react'
import Footer from '../components/Footer'


const Course = () => 
{
  return (
    <>
       
        <main className="course-content">
          <div className="row-course">
            <div className="column-course">
              <input
                    type="text"
                    className="course-input-bar"
                    placeholder="Search by keyword"
                  />
            </div>
            <div className="column-course1">
              <div className="search-dropdown active">
                <ul className="dropdown-list">
                  <li>Filters</li>
                  <ul className="select-dropdown">
                    <li>Diploma</li>
                    <li>Postgraduate</li>
                    <li>Undergraduate</li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
          <div className="row1">
          <div className="column1">
            <h3>Most Reviews Subject</h3>
          </div>
          <div className="column1">
            <h1>Courses</h1>
          </div>
        </div>
        </main>
      <Footer />
    </>
>>>>>>> b76dbb8c410cf4d8a552dbdcf9832c874900b1d9
  )
}

export default Course
