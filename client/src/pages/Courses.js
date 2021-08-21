import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCourses } from '../actions/course.action'
import { isEmpty } from '../components/Utils'
import { useHistory } from 'react-router-dom'
import ReactStars from 'react-stars'
import { NavLink } from 'react-router-dom'

const Courses = () => {
  // const [openList, setOpenList] = useState(false)
  const history = useHistory()
  const coursesData = useSelector((state) => state.courseReducer)
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  let averageMark = 0

  const onLinkClick = () => {
    setOpen(false)
  }

  useEffect(() => {
    dispatch(getAllCourses())
  }, [dispatch])

  const dropdown = document.querySelectorAll('.dropdown');
  const elements = Array.from( dropdown );
  elements.forEach( function( elm ) {
      elm.addEventListener('click',( evt ) => {
         console.log( evt.target );
          const target = evt.target;
          if( target.parentNode.classList.contains( 'open')){
              target.parentNode.classList.remove('open');
          }
          else {
              target.parentNode.classList.add('open');
          }
      })
  });

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
          {/* <div className="search-dropdown active">
            <ul
              className={openList ? 'dropdown-list open' : 'dropdown-list'}
              onClick={() => setOpenList(!openList)}
            >
              <li>Filters</li>
              <ul className="select-dropdown">
                <li>Diploma</li>
                <li>Postgraduate</li>
                <li>Undergraduate</li>
              </ul>
            </ul>
          </div> */}
            <div className="dropdown">
              <NavLink exact to="#" onClick={onLinkClick}>Filters</NavLink>
                <ul className="submenu">
                  <li>
                    <NavLink exact to="#" onClick={onLinkClick}>Diploma</NavLink>
                  </li>
                  <li>
                    <NavLink exact to="#" onClick={onLinkClick}>Postgraduate</NavLink>
                  </li>
                  <li>
                    <NavLink exact to="#" onClick={onLinkClick}>Undergraduate</NavLink>
                  </li>
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
    </main>
  )
}

export default Courses
