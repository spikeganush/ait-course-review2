import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSubject } from '../actions/subject.actions'
import ReactStars from 'react-stars'
import CardReviewsSubjects from '../components/CardReviewsSubjects'
import { isEmpty } from '../components/Utils'
import WriteReviewSubject from '../components/WriteReviewSubject'

const Subject = () => {
  const subjectData = useSelector((state) => state.subjectReducer)
  const userData = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()
  const { id } = useParams()
  const [readReview, setReadReview] = useState(false)

  const subjectMarks = !isEmpty(subjectData._id)
    ? subjectData.reviews.map((review) => review.reviewMark)
    : 0

  const totalMark = !isEmpty(subjectData._id)
    ? subjectMarks.reduce((prev, cur) => prev + cur, 0)
    : 0

  useEffect(() => {
    dispatch(getSubject(id))
  }, [dispatch, id])

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
        <WriteReviewSubject
          subjectData={subjectData}
          userId={userData._id}
          userName={userData.username}
        />

        {readReview && <CardReviewsSubjects review={subjectData} />}
      </div>
    </div>
  )
}

export default Subject
