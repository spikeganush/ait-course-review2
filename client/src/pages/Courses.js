import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCourses } from '../actions/course.action'
import { isEmpty } from '../components/Utils'
import { useHistory } from 'react-router-dom'
import ReactStars from 'react-stars'

const Courses = () => 
{
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
      </main>
      <Footer />
    </>
      
    
  )
}

export default Courses

