import React from 'react'
import { useSelector } from 'react-redux'
import { isEmpty, timestampParser } from './Utils'
import ReactStars from 'react-stars'
import EditDeleteReview from './EditDeleteReview'

const CardReviews = () => {
  const courseData = useSelector((state) => state.courseReducer)
  const usersData = useSelector((state) => state.usersReducer)
  const userData = useSelector((state) => state.userReducer)

  return (
    <>
      {courseData.reviews.map((reviews) => {
        return (
          <div className="reviews-container" key={reviews._id}>
            <div
              className={
                reviews.reviewerId === userData._id
                  ? 'review current-user'
                  : 'review'
              }
              key={reviews._id}
            >
              <div className="top-part">
                <div className="user-info">
                  <img
                    src={
                      !isEmpty(usersData[0]) &&
                      usersData
                        .map((user) => {
                          if (user._id === reviews.reviewerId)
                            return __dirname + user.picture
                          else return null
                        })
                        .join('')
                    }
                    alt="reviewer"
                  />
                  <h3>{reviews.reviewerUsername}</h3>
                </div>
                <span>{timestampParser(reviews.timestamp)}</span>
              </div>
              <div className="bottom-part">
                <p>{reviews.reviewText}</p>

                <ReactStars size={40} value={reviews.reviewMark} edit={false} />
                <EditDeleteReview review={reviews} courseId={courseData._id} />
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default CardReviews
