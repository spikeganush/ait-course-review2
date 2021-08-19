import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import bg_banner from '../img/pineapple3.jpeg'
import { useDispatch, useSelector } from 'react-redux'
import { getCourses } from '../actions/course.action'
import { getSubjects } from '../actions/subject.actions'
import { isEmpty } from '../components/Utils'
import { useHistory, NavLink } from 'react-router-dom'

const Home = () => {
  const dispatch = useDispatch()
  const courseData = useSelector((state) => state.courseReducer)
  const subjectData = useSelector((state) => state.subjectReducer)
  const history = useHistory()

  const handleOpenCourse = (props) => {
    history.push(`/course/${props}`)
  }

  useEffect(() => {
    dispatch(getCourses(3))
    dispatch(getSubjects(3))
  }, [dispatch])

  return (
    <>
      <div className="banner-content">
        <div
          className="banner"
          style={{ backgroundImage: `url(${bg_banner})` }}
        >
          <div className="text-banner">
            <h1>Enjoy Your New</h1>
            <h1>Experiences With Us</h1>
          </div>
          <input
            type="text"
            className="input-bar"
            placeholder="Search by keyword"
          />
        </div>

        <div className="banner2">
          <div className="row">
            <div className="column">
              <h1>Welcome To Course Reviews</h1>
              <p>
                Welcome AIT students, let's explore our new websites that
                providing lots of reviews and suggestions from AIT students.
                Students cann freely give opinions in what the thing of some
                particular course and share their experiences to another
                students.
              </p>
            </div>
            <div className="column">
              <img
                src="../img/pineapple6.jpeg"
                alt="student"
                className="student-image"
              />
            </div>
          </div>
        </div>
      </div>
      <main className="content">
        <div className="row1">
          <div className="column1">
            <h1>Course Suggestions</h1>
          </div>

          <div className="column1">
            <NavLink exact to="/courses">
              View all
            </NavLink>
          </div>
        </div>

        <div className="row2">
          {!isEmpty(courseData[0]) &&
            courseData.map((course) => {
              return (
                <div className="column2" key={course._id}>
                  <img
                    src={course.photo}
                    alt="course"
                    className="course-photo"
                    onClick={() => handleOpenCourse(course._id)}
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

        <div className="row1">
          <div className="column1">
            <h1>Most Reviews Subject</h1>
          </div>
          <div className="column1">
            <a href="view_all">View all</a>
          </div>
        </div>

        <div className="row2">
          {!isEmpty(subjectData[0]) &&
            subjectData.map((subject) => {
              return (
                <div className="column2" key={subject._id}>
                  <img
                    src={subject.photo}
                    alt="subject"
                    className="course-photo"
                  />
                  <h3>{subject.title}</h3>
                  <p>{subject.summarize}</p>
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

export default Home
