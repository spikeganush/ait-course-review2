import React from 'react'
import axios from 'axios'
import cookie from 'js-cookie'
import { useHistory } from 'react-router-dom'

const Logout = () => {
  const history = useHistory()
  const removeCookie = key => {
    if (window !== 'undefined') {
      cookie.remove(key, { expires: 1 })
    }
  }
  const logout = async () => {
    await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}api/user/logout`,
      withCredentials: true
    })
      .then(() => removeCookie('jwt'))
      .catch(err => console.log(err))

    history.push('/')
  }
  return (
    <li onClick={logout}>
      <img
        src='./img/icons/logout.svg'
        alt='logout-icon'
        className='logout-icon'
      />
    </li>
  )
}

export default Logout
