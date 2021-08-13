import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import axios from 'axios'
import '../components/auth/LoginScreen'

import { isEmpty } from '../components/Utils'
import { getCourses } from '../actions/course.action'
import { getSubjects } from '../actions/subject.actions'
import DeleteCourse from '../components/Admin/DeleteCourse'
import DeleteSubject from '../components/Admin/DeleteSubject'
import AddCourseForm from '../components/Admin/AddCourseForm'
import AddSubjectForm from '../components/Admin/AddSubjectForm'

const Admin = () => {
  const courseData = useSelector((state) => state.courseReducer)
  const subjectData = useSelector((state) => state.subjectReducer)
  const dispatch = useDispatch()

  //load data
  const [loadCourses, setLoadCourses] = useState(true)

  useEffect(() => {
    if (loadCourses) {
      dispatch(getCourses())
      dispatch(getSubjects())
      setLoadCourses(false)
    }
  }, [loadCourses, dispatch])
  return (
    <>
      <div className="admin">
        <AddCourseForm />
        <AddSubjectForm />
      </div>
      <br />
      <h1 className="admin-title">Courses</h1>
      <div className="admin update">
        {!isEmpty(courseData[0]) &&
          courseData.map((course) => {
            return (
              <div className="login-screen__form" key={course._id}>
                <h3>{course.title}</h3>
                <img
                  src={course.photo}
                  className="photo-course-subject"
                  alt="course"
                />
                <h4>{course.code}</h4>
                <h4>{course.summarize}</h4>
                <h4>{course.description}</h4>
                <DeleteCourse id={course._id} />
              </div>
            )
          })}
      </div>

      <br />
      <h1 className="admin-title">Subjects</h1>
      <div className="admin update">
        {!isEmpty(subjectData[0]) &&
          subjectData.map((subject) => {
            return (
              <div className="login-screen__form" key={subject._id}>
                <h3>{subject.title}</h3>
                <img
                  src={subject.photo}
                  className="photo-course-subject"
                  alt="course"
                />
                <h4>{subject.code}</h4>

                {!isEmpty(courseData[0]) &&
                  courseData.map((course) => {
                    for (let i = 0; i < subject.course.length; i++) {
                      if (subject.course[i] === course._id) {
                        return <h4 key={course._id}>{course.title}</h4>
                      } else {
                        return null
                      }
                    }
                    return null
                  })}

                <h4>{subject.summarize}</h4>
                <h4>{subject.description}</h4>
                <DeleteSubject id={subject._id} />
              </div>
            )
          })}
      </div>
    </>
  )
}

export default Admin
