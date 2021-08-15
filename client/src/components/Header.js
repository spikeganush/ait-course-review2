import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { UidContext } from './AppContext'
import Log from '../components/auth'

const Header = () => {
  const uid = useContext(UidContext)
  const userData = useSelector((state) => state.userReducer)
  const [loginPopup, setLoginPopup] = useState(false)
  const [active, setActive] = useState('')

  const logoutHandler = () => {
    localStorage.removeItem('authToken')
    window.location.reload()
  }

  const handleBurger = () => {
    if (!active) {
      setActive('nav-active')
    } else {
      setActive('')
    }
  }
  // const navSlide = () =>
  // {
  //   const burger = document.querySelector('.burger');
  //   const nav = document.querySelector('.nav');
  //   const navLinks = document.querySelectorAll('.nav li');

  //   burger.addEventListener('click', ()=>
  //   {
  //     nav.classList.toggle('nav-active');
  //   });

  //   navLinks.forEach((link, Header)=>
  //   {

  //   });

  // }

  // navSlide();

  return (
    <header className="header">
      <NavLink exact to="/">
        <img
          src="https://thebest-edu.com/wp-content/uploads/2021/03/AIT_LOGO_newblue_y9eugb.png"
          alt="logo"
          className="logo"
        />
      </NavLink>
      <nav className="nav-bar">
        <div className="burger" onClick={handleBurger}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
          <div className={`nav-burguer ${active}`}>
            <ul className="nav">
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
              <li>
                <div className="profile">
                  {uid ? (
                    <ul className="profile-nav">
                      {userData.username}
                      <NavLink exact to="/profil" className="profil-link">
                        <img
                          src={userData.picture}
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
                      <span
                        className="cross"
                        onClick={() => setLoginPopup(false)}
                      >
                        &#10005;
                      </span>
                      <div className="log-container">
                        <Log signin={true} signup={false} forgot={false} />
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="profile">
        {uid ? (
          <ul className="profile-nav">
            {userData.username}
            <NavLink exact to="/profil" className="profil-link">
              <img
                src={userData.picture}
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
