import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addCourse, getCourses } from '../../actions/course.action'

const AddCourseForm = () => {
  //course handler
  const [title, setTitle] = useState('')
  const [code, setCode] = useState('')
  const [summarize, setSummarize] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState()
  const [coursePhoto, setCoursePhoto] = useState('')

  //message handler
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const dispatch = useDispatch()

  const handlePhoto = (e) => {
    setCoursePhoto(URL.createObjectURL(e.target.files[0]))
    setFile(e.target.files[0])
  }

  const addCourseHandler = async (e) => {
    e.preventDefault()
    const data = new FormData()

    data.append('title', title)
    data.append('code', code)
    data.append('summarize', summarize)
    data.append('description', description)
    if (file) data.append('file', file)

    await dispatch(addCourse(data))
    dispatch(getCourses())

    setTitle('')
    setCode('')
    setSummarize('')
    setDescription('')
    setCoursePhoto('')
    setFile('')
    setError('')
    setSuccess('')
  }

  return (
    <div className="add-course-form">
      <form
        onSubmit={addCourseHandler}
        className="login-screen__form"
        id="add-course"
      >
        <h3 className="login-screen__title">Add course</h3>
        {error && <span className="error-message">{error}</span>}
        {success && <span className="success-message">{success}</span>}
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            required
            id="title"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            tabIndex={1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="code">Canvas code:</label>
          <input
            type="text"
            required
            id="code"
            placeholder="code"
            onChange={(e) => setCode(e.target.value)}
            value={code}
            tabIndex={2}
          />
        </div>
        <div className="form-group">
          <label htmlFor="summarize">Summarize:</label>
          <textarea
            required
            id="summarize"
            placeholder="A summarize of the description"
            onChange={(e) => setSummarize(e.target.value)}
            value={summarize}
            cols="35"
            rows="3"
            tabIndex={3}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            required
            id="description"
            placeholder="The full description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            cols="35"
            rows="7"
            tabIndex={4}
          ></textarea>
          <label htmlFor="file">Course photo:</label>
          <input
            required
            type="file"
            id="file"
            name="file"
            accept=".jpg, .jpeg, .png"
            onChange={(e) => handlePhoto(e)}
          />
          {coursePhoto ? (
            <img
              src={coursePhoto}
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

export default AddCourseForm
