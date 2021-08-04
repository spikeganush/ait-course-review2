import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { UidContext } from './AppContext'
import Log from '../components/auth'

const Header = () => {
  const uid = useContext(UidContext)
  const userData = useSelector((state) => state.userReducer)
  const [loginPopup, setLoginPopup] = useState(false)

  const logoutHandler = () => {
    localStorage.removeItem('authToken')
    window.location.reload()
  }

  return (
    <header className="header">
      <nav>
        <NavLink exact to="/">
          <div className="logo">
            <img src="./img/logo.png" alt="logo" className="img-logo" />
          </div>
        </NavLink>
        <div className="nav">
          <ul>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/course">
                Course
              </NavLink>
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
        </div>
        <div className="profil">
          {uid ? (
            <ul>
              <li className="welcome">
                <NavLink exact to="/profil" className="profil-link">
                  {userData.username}
                  <img
                    src={userData.picture}
                    alt="user-pic"
                    className="user-profil-pic"
                  />{' '}
                  {userData.pseudo}
                </NavLink>
              </li>
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
      </nav>
    </header>
  )
}

export default Header
