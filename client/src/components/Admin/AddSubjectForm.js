import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { isEmpty } from '../../components/Utils'
import { addSubject, getSubjects } from '../../actions/subject.actions'

const AddSubjectForm = () => {
  const courseData = useSelector((state) => state.courseReducer)
  //subject handler
  const [titleSubject, setTitleSubject] = useState('')
  const [codeSubject, setCodeSubject] = useState('')
  const [summarizeSubject, setSummarizeSubject] = useState('')
  const [descriptionSubject, setDescriptionSubject] = useState('')
  const [courseSubject, setCourseSubject] = useState('')
  const [fileSubject, setFileSubject] = useState()
  const [subjectPhoto, setSubjectPhoto] = useState('')

  //message handler
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const dispatch = useDispatch()

  const addSubjectHandler = async (e) => {
    e.preventDefault()
    const data = new FormData()

    data.append('title', titleSubject)
    data.append('code', codeSubject)
    data.append('course', courseSubject)
    data.append('summarize', summarizeSubject)
    data.append('description', descriptionSubject)
    if (fileSubject) data.append('file', fileSubject)

    await dispatch(addSubject(data))
    dispatch(getSubjects())

    setTitleSubject('')
    setCodeSubject('')
    setCourseSubject('')
    setSummarizeSubject('')
    setDescriptionSubject('')
    setSubjectPhoto('')
    setFileSubject('')
    setError('')
    setSuccess('')
  }

  const handlePhotoSubject = (e) => {
    setSubjectPhoto(URL.createObjectURL(e.target.files[0]))
    setFileSubject(e.target.files[0])
  }
  console.log(courseSubject)
  return (
    <div className="add-subject-form">
      <form
        onSubmit={addSubjectHandler}
        className="login-screen__form"
        id="add-course"
      >
        <h3 className="login-screen__title">Add subject</h3>
        {error && <span className="error-message">{error}</span>}
        {success && <span className="success-message">{success}</span>}
        <div className="form-group">
          <label htmlFor="titleSubject">Title:</label>
          <input
            type="text"
            required
            id="titleSubject"
            placeholder="Title"
            onChange={(e) => setTitleSubject(e.target.value)}
            value={titleSubject}
            tabIndex={1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="codeSubject">Canvas code:</label>
          <input
            type="text"
            required
            id="codeSubject"
            placeholder="code"
            onChange={(e) => setCodeSubject(e.target.value)}
            value={codeSubject}
            tabIndex={2}
          />
        </div>
        <div className="form-group">
          <label htmlFor="courseSubject">Course:</label>
          <select
            id="courseSubject"
            name="courseSubject"
            onChange={(e) => setCourseSubject(e.target.value)}
          >
            {!isEmpty(courseData[0]) &&
              courseData.map((course) => {
                return (
                  <option value={course._id} key={course._id}>
                    {course.title}
                  </option>
                )
              })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="summarizeSubject">Summarize:</label>
          <textarea
            required
            id="summarizeSubject"
            placeholder="A summarize of the description"
            onChange={(e) => setSummarizeSubject(e.target.value)}
            value={summarizeSubject}
            cols="35"
            rows="3"
            tabIndex={4}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="descriptionSubject">Description:</label>
          <textarea
            required
            id="descriptionSubject"
            placeholder="The full description"
            onChange={(e) => setDescriptionSubject(e.target.value)}
            value={descriptionSubject}
            cols="35"
            rows="7"
            tabIndex={5}
          ></textarea>
          <label htmlFor="fileSubject">Subject photo:</label>
          <input
            type="file"
            id="file"
            name="file"
            accept=".jpg, .jpeg, .png"
            onChange={(e) => handlePhotoSubject(e)}
          />
          {subjectPhoto ? (
            <img
              src={subjectPhoto}
              className="photo-course-subject"
              alt="course"
            />
          ) : null}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddSubjectForm
