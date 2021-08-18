import React from 'react'
import Footer from '../components/Footer'


const Course = () => 
{
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
        </main>
      <Footer />
    </>
  )
}

export default Course
