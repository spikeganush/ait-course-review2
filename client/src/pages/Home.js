import React, { useEffect } from 'react'
import bg_banner from '../img/pineapple3.jpeg'
import { useDispatch, useSelector } from 'react-redux'
import { getCourses } from '../actions/course.action'
import { getSubjects } from '../actions/subject.actions'
import { isEmpty } from '../components/Utils'
import { useHistory, NavLink } from 'react-router-dom'
import ReactStars from 'react-stars'
import SearchBarHome from '../components/SearchBarHome'

const Home = () => {
  const dispatch = useDispatch()
  const courseData = useSelector((state) => state.courseReducer)
  const subjectData = useSelector((state) => state.subjectReducer)
  const history = useHistory()

  let averageMark = 0
  let averageMarkSubjects = 0

  const handleOpenCourse = (props) => {
    history.push(`/course/${props}`)
  }

  const handleOpenSubject = (props) => {
    history.push(`/subject/${props}`)
  }

  useEffect(() => {
    dispatch(getCourses(3))
    dispatch(getSubjects(3))
  }, [dispatch])

  const average = (id) => {
    if (!isEmpty(courseData[0])) {
      courseData.map((course) => {
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

  const averageSubject = (id) => {
    if (!isEmpty(subjectData[0])) {
      subjectData.map((subject) => {
        if (subject._id === id) {
          const totalMark = subject.reviews.reduce(
            (prev, cur) => prev + cur.reviewMark,
            0
          )
          averageMarkSubjects = totalMark / subject.reviews.length
          return averageMarkSubjects
        }
        return averageMarkSubjects
      })
    }
    return averageMarkSubjects
  }

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
          {/* <input
            type="text"
            className="input-bar"
            placeholder="Search by keyword"
          /> */}
          <SearchBarHome course={courseData} subject={subjectData} />
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
                    <ReactStars
                      size={40}
                      value={average(course._id)}
                      edit={false}
                    />
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

        <div className="row1">
          <div className="column1">
            <h1>Most Reviews Subject</h1>
          </div>
          <div className="column1">
            <NavLink exact to="/subjects">
              View all
            </NavLink>
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
                    onClick={() => handleOpenSubject(subject._id)}
                  />
                  <h3>{subject.title}</h3>
                  <p>{subject.summarize}</p>
                  <div className="star-ranking">
                    <ReactStars
                      size={40}
                      value={averageSubject(subject._id)}
                      edit={false}
                    />
                    {subject.reviews
                      ? subject.reviews.length > 0 && (
                          <div className="read-review">
                            ({subject.reviews.length})
                          </div>
                        )
                      : '(0)'}
                  </div>
                </div>
              )
            })}
        </div>
      </main>
    </>
  )
}

export default Home
