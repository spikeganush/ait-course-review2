import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { UidContext } from './AppContext'
import Log from '../components/auth'
import logo from '../img/logo.png'

const Header = () => {
  const uid = useContext(UidContext)
  const userData = useSelector((state) => state.userReducer)
  const [loginPopup, setLoginPopup] = useState(false)
  const [open, setOpen] = useState(false)
  const logoutHandler = () => {
    localStorage.removeItem('authToken')
    window.location.reload()
  }

  return (
    <header className="header">
      <NavLink exact to="/">
        <img src={logo} alt="logo" className="logo" />
      </NavLink>
      <button className="nav-button" onClick={() => setOpen(!open)}>
        <span className="stripe"></span>
        <span className="stripe"></span>
        <span className="stripe"></span>
      </button>
      <nav>
        <ul className={open ? 'nav open' : 'nav'}>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <div className={open ? 'dropdown open' : 'dropdown'}>
              <NavLink exact to="#" onClick={() => setOpen(!open)}>
                Reviews
              </NavLink>
              <ul className="submenu">
                <li>
                  <NavLink exact to="/courses" onClick={() => setOpen(!open)}>
                    Courses
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/subjects" onClick={() => setOpen(!open)}>
                    Subjects
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NavLink exact to="/news">
              News
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/aboutUs">
              About us
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact">
              Contact
            </NavLink>
          </li>
          {userData.admin ? (
            <li>
              <NavLink exact to="/admin">
                Admin
              </NavLink>
            </li>
          ) : (
            <></>
          )}
        </ul>
      </nav>

      <div className="profile">
        {uid ? (
          <ul className="profile-nav">
            {userData.username}
            <NavLink exact to="/profil" className="profil-link">
              <img
                src={__dirname + userData.picture}
                alt="user-pic"
                className="profile-logo"
              />{' '}
              {userData.pseudo}
            </NavLink>

            <span onClick={logoutHandler}>
              <img
                src="../img/icons/logout.svg"
                alt="login-icon"
                className="logout-icon"
              />
            </span>
          </ul>
        ) : (
          <ul>
            <li>
              <span onClick={() => setLoginPopup(true)}>
                <img
                  src="../img/icons/login.svg"
                  alt="login-icon"
                  className="logout-icon"
                />
              </span>
            </li>
          </ul>
        )}
      </div>
      {loginPopup && (
        <div className="popup-profil-container">
          <div className="modal">
            <span className="cross" onClick={() => setLoginPopup(false)}>
              &#10005;
            </span>
            <div className="log-container">
              <Log signin={true} signup={false} forgot={false} />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
