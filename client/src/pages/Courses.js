import React, { useEffect } from 'react'
//import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCourses } from '../actions/course.action'
import { isEmpty } from '../components/Utils'
import { useHistory } from 'react-router-dom'
import ReactStars from 'react-stars'

const Courses = () => {
  const history = useHistory()
  const coursesData = useSelector((state) => state.courseReducer)
  const dispatch = useDispatch()
  let averageMark = 0

  useEffect(() => {
    dispatch(getAllCourses())
  }, [dispatch])

  const handleOpenCourse = (props) => {
    history.push(`/course/${props}`)
  }

  const average = (id) => {
    if (!isEmpty(coursesData[0])) {
      coursesData.map((course) => {
        if (course._id === id) {
          const totalMark = course.reviews.reduce(
            (prev, cur) => prev + cur.reviewMark,
            0
          )
          averageMark = totalMark / course.reviews.length
          return averageMark
        }
        return averageMark
      })
    }
    return averageMark
  }

  return (
    <div className="row3">
      {!isEmpty(coursesData[0]) &&
        coursesData.map((course) => {
          return (
            <div
              className="column3"
              onClick={() => handleOpenCourse(course._id)}
              key={course._id}
            >
              <img
                src={__dirname + course.photo}
                alt="course"
                className="course-photo"
              />
              <h3>{course.title}</h3>
              <p>{course.summarize}</p>
              <div className="star-ranking">
                <ReactStars
                  size={40}
                  value={average(course._id)}
                  edit={false}
                />
                {console.log(average(course._id))}
                {course.reviews
                  ? course.reviews.length > 0 && (
                      <div className="read-review">
                        ({course.reviews.length})
                      </div>
                    )
                  : '(0)'}
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Courses


