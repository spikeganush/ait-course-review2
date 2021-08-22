import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSubjects } from '../actions/subject.actions'
import { isEmpty } from '../components/Utils'
import { useHistory } from 'react-router-dom'
import ReactStars from 'react-stars'
import SearchBar from '../components/SearchBarSubject'

const Subjects = () => {
  const history = useHistory()
  const subjectsData = useSelector((state) => state.subjectReducer)
  const dispatch = useDispatch()
  let averageMark = 0

  useEffect(() => {
    dispatch(getAllSubjects())
  }, [dispatch])

  const handleOpenCourse = (props) => {
    history.push(`/subject/${props}`)
  }

  const average = (id) => {
    if (!isEmpty(subjectsData[0])) {
      subjectsData.map((subject) => {
        if (subject._id === id) {
          const totalMark = subject.reviews.reduce(
            (prev, cur) => prev + cur.reviewMark,
            0
          )
          averageMark = totalMark / subject.reviews.length
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
        <SearchBar data={subjectsData} />
      </div>
      <div className="row1">
        <div className="row1">
          <h1>Subjects</h1>
        </div>
      </div>
      <div className="row3">
        {!isEmpty(subjectsData[0]) &&
          subjectsData.map((subject) => {
            return (
              <div
                className="column3"
                onClick={() => handleOpenCourse(subject._id)}
                key={subject._id}
              >
                <img
                  src={__dirname + subject.photo}
                  alt="course"
                  className="course-photo"
                />
                <h3>{subject.title}</h3>
                <p>{subject.summarize}</p>
                <div className="star-ranking">
                  <ReactStars
                    size={40}
                    value={average(subject._id)}
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
  )
}

export default Subjects
