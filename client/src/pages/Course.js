import React, { useEffect } from 'react'
//import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCourse } from '../actions/course.action'

const Course = () => {
  const courseData = useSelector((state) => state.courseReducer)
  const dispatch = useDispatch()
  let { id } = useParams()

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
        <p>{courseData.summarize}</p>
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
    </div>
  )
}

export default Course
