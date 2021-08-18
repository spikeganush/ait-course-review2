import React, { useEffect } from 'react'
//import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCourses } from '../actions/course.action'
import { isEmpty } from '../components/Utils'
import { useHistory } from 'react-router-dom'

const Courses = () => {
  const history = useHistory()
  const coursesData = useSelector((state) => state.courseReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCourses())
  }, [dispatch])

  const handleOpenCourse = (props) => {
    history.push(`/course/${props}`)
  }

  return (
    <div className="row3">
      {!isEmpty(coursesData[0]) &&
        coursesData.map((course) => {
          return (
            <div
              className="column3"
              onClick={() => handleOpenCourse(course._id)}
            >
              <img
                src={__dirname + course.photo}
                alt="course"
                className="course-photo"
              />
              <h3>{course.title}</h3>
              <p>{course.summarize}</p>
              <div className="star-ranking">
                <img
                  src="https://i.ibb.co/2kW5mnM/star.png"
                  alt="star-checked"
                  className="star-image"
                />
                <img
                  src="https://i.ibb.co/2kW5mnM/star.png"
                  alt="star-checked"
                  className="star-image"
                />
                <img
                  src="https://i.ibb.co/2kW5mnM/star.png"
                  alt="star-checked"
                  className="star-image"
                />
                <img
                  src="https://i.ibb.co/TwYYb93/star-1.png"
                  alt="star-unchecked"
                  className="star-image"
                />
                <img
                  src="https://i.ibb.co/TwYYb93/star-1.png"
                  alt="star-unchecked"
                  className="star-image"
                />
                <div className="number-ranking">(120)</div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Courses
