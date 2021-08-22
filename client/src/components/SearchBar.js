import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
import { NavLink } from 'react-router-dom'

const SearchBar = ({ data }) => {
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState('')

  const handleFilter = (event) => {
    const searchWord = event.target.value
    setWordEntered(searchWord)
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase())
    })

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
      <div className="column-course">
        <input
          type="text"
          className="course-input-bar"
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
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.map((value, key) => {
            return (
              <NavLink exact to={`/course/${value._id}`} className="dataItem">
                {value.title}
              </NavLink>
            )
          })}
        </div>
      )}
    </>
  )
}

export default SearchBar
