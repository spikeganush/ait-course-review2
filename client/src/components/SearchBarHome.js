import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
import { NavLink } from 'react-router-dom'

const SearchBarHome = ({ course, subject }) => {
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState('')
  let count = 0

  const handleFilter = (event) => {
    const searchWord = event.target.value
    setWordEntered(searchWord)
    const newFilterCourse = course.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase())
    })
    const newFilterSubject = subject.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase())
    })

    const newFilter = newFilterCourse.concat(newFilterSubject)

    if (searchWord === '') {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }
  }

  const clearInput = () => {
    setFilteredData([])
    setWordEntered('')
  }

  return (
    <>
      <div className="search-bar-home">
        <input
          type="text"
          className="input-bar"
          placeholder="Search by keyword"
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>

        {filteredData.length !== 0 && (
          <div className="dataResult">
            {filteredData.map((value, key) => {
              return course.map((mapCourse) => {
                return mapCourse._id === value._id ? (
                  <NavLink
                    exact
                    to={`/course/${value._id}`}
                    className="dataItem"
                    key={key + count++}
                  >
                    {value.title}
                  </NavLink>
                ) : (
                  <NavLink
                    exact
                    to={`/subject/${value._id}`}
                    className="dataItem"
                    key={key + count++}
                  >
                    {value.title}
                  </NavLink>
                )
              })
            })}
          </div>
        )}
      </div>
    </>
  )
}

export default SearchBarHome
