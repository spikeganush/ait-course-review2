import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCourse } from '../actions/course.action'
import ReactStars from 'react-stars'
import CardReviews from '../components/CardReviews'
import { isEmpty } from '../components/Utils'
import WriteReview from '../components/WriteReview'

const Course = () => {
  const courseData = useSelector((state) => state.courseReducer)
  const userData = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()
  const { id } = useParams()
  const [readReview, setReadReview] = useState(false)

  const courseMarks = !isEmpty(courseData._id)
    ? courseData.reviews.map((review) => review.reviewMark)
    : 0

  const totalMark = !isEmpty(courseData._id)
    ? courseMarks.reduce((prev, cur) => prev + cur, 0)
    : 0

  useEffect(() => {
    dispatch(getCourse(id))
  }, [dispatch, id])

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

        <WriteReview
          courseData={courseData}
          userId={userData._id}
          userName={userData.username}
        />
        {readReview && <CardReviews review={courseData} />}
      </div>
    </div>
  )
}

export default Course
