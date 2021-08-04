import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const SignInForm = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = e => {
    e.preventDefault()
    const emailError = document.querySelector('.email.error')
    const passwordError = document.querySelector('.password.error')

    axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      withCredentials: true,
      data: {
        email: email,
        password: password
      }
    })
      .then(res => {
        console.log(res)
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email
          passwordError.innerHTML = res.data.errors.password
        } else {
          history.push('/')
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <form action='' onSubmit={handleLogin} id='signup-form'>
      <label htmlFor='email'>Email</label>
      <br />
      <input
        type='text'
        name='email'
        id='id'
        onChange={e => setEmail(e.target.value)}
        value={email}
      />
      <div className='email error'></div>
      <br />
      <label htmlFor='password'>Password</label>
      <br />
      <input
        type='password'
        name='password'
        id='password'
        onChange={e => setPassword(e.target.value)}
        value={password}
      />
      <div className='password error'></div>
      <br />
      <input type='submit' value='Log in' />
    </form>
  )
}

export default SignInForm
