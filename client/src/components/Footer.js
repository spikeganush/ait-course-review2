import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row-footer">
        <div className="column3">
          <h2>AIT COURSE REVIEWS</h2>
          <p>
            AIT course reviews site brings you to explore with many comments and
            advice from all students and provide the opportunity to share your
            own opinion to any courses and subjects.
          </p>
        </div>

        <div className="column3">
          <h3>Explore</h3>
          <ul className="nav1">
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
          </ul>
        </div>

        <div className="column3">
          <ul className="nav1">
            <h3>Services</h3>
            <li>
              <a href="faq">FAQ</a>
            </li>
            <li>
              <a href="community">Community</a>
            </li>
            <li>
              <a href="call_centre">Call centre</a>
            </li>
          </ul>
        </div>

        <div className="column3">
          <h3>Setting</h3>
          <ul className="nav1">
            <li>
              <NavLink exact to="/profil">
                Settings
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="row1">
        <div className="column4">
          <p className="text">All right reserve &copy; 2021 pineapple.inc</p>
        </div>
        <div className="column4">
          <h3>Our Social Media</h3>
          <a href="facebook">
            <img src="../img/facebook.png" alt="facebook-logo" />
          </a>
          <a href="twitter">
            <img src="../img/twitter.png" alt="twttier-logo" />
          </a>
          <a href="google">
            <img src="../img/google-plus.png" alt="google-logo" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
