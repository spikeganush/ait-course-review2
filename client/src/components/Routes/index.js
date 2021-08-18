import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import Home from '../../pages/Home'
import Profil from '../../pages/Profil'
import Course from '../../pages/Course'
import Courses from '../../pages/Courses'
import News from '../../pages/News'
import AboutUs from '../../pages/AboutUs'
import Contact from '../../pages/Contact'
import admin from '../../pages/Admin'
import Header from '../Header'
import Search from '../../pages/Search'

// Screens
// import LoginScreen from '../auth/LoginScreen'
// import RegisterScreen from '../auth/RegisterScreen'
// import ForgotPasswordScreen from '../auth/ForgotPasswordScreen'
import ResetPasswordScreen from '../auth/ResetPasswordScreen'

const index = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profil" exact component={Profil} />
        <Route path="/course/:id" exact component={Course} />
        <Route path="/courses/" component={Courses} />
        <Route path="/news" exact component={News} />
        <Route path="/aboutUs" exact component={AboutUs} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/admin" exact component={admin} />
        <Route path="/search" exact component={Search} />
        {/* <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <Route exact path="/forgotpassword" component={ForgotPasswordScreen} /> */}
        <Route
          exact
          path="/resetpassword/:resetToken"
          component={ResetPasswordScreen}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default index
