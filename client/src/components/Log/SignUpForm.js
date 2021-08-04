import React, { useState } from 'react'
import axios from 'axios'
import SignInForm from './SignInForm'

const SignUpForm = () => {
    const [formSubmit, setFormSubmit] = useState(false)
    const [pseudo, setPseudo] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [controlPassword, setControlPassword] = useState('')

    const handleRegister = async (e) => {
        e.preventDefault()
        const terms = document.getElementById('terms')
        const pseudoError = document.querySelector('.pseudo.error')
        const emailError = document.querySelector('.email.error')
        const passwordError = document.querySelector('.password.error')
        const passwordConfirmError = document.querySelector('.password-conf.error')
        const termsError = document.querySelector('.terms.error')

        pseudoError.innerHTML = ''
        emailError.innerHTML = ''
        passwordError.innerHTML = ''

        passwordConfirmError.innerHTML = ''
        termsError.innerHTML = ''

        if (password !== controlPassword || !terms.checked) {
            if (password !== controlPassword)
                passwordConfirmError.innerHTML = 'Passwords don\'t match.'

            if (!terms.checked)
                termsError.innerHTML = 'Please, accept the terms and conditions.'
        } else {
            await axios({
                method: 'post',
                url: `${process.env.REACT_APP_API_URL}api/user/register`,
                withCredentials: true,
                data: {
                    pseudo,
                    email,
                    password
                },
            })
                .then((res) => {
                    console.log(res)
                    if (res.data.errors) {
                        pseudoError.innerHTML = res.data.errors.pseudo
                        emailError.innerHTML = res.data.errors.email
                        passwordError.innerHTML = res.data.errors.password
                    } else {
                        setFormSubmit(true)
                    }
                })
                .catch((err) => console.log(err))
        }

    }
    return (
        <>
            {formSubmit ? (
                <>
                    <SignInForm />
                    <h4 className='success'>
                        Register success. Please connect.
                    </h4>
                </>
            ) : (

                <form action="" onSubmit={handleRegister} id='sign-up-form'>
                    <label htmlFor='pseudo'>Pseudo</label>
                    <br />
                    <input type="text"
                        name='pseudo'
                        id='id'
                        onChange={(e) => setPseudo(e.target.value)}
                        value={pseudo}
                    />
                    <div className="pseudo error"></div>
                    <br />
                    <label htmlFor='email'>Email</label>
                    <br />
                    <input type="text"
                        name='email'
                        id='email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <div className="email error"></div>
                    <br />
                    <label htmlFor='password'>Password</label>
                    <br />
                    <input type="password"
                        name='password'
                        id='password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <div className="password error"></div>
                    <br />
                    <label htmlFor='password-conf'>Confirm password</label>
                    <br />
                    <input type="password"
                        name='password'
                        id='password-conf'
                        onChange={(e) => setControlPassword(e.target.value)}
                        value={controlPassword}
                    />
                    <div className="password-conf error"></div>
                    <br />
                    <input type="checkbox" id='terms' />
                    <label htmlFor="terms"> I agree to <a href="/" target='_blank' rel='noopener noreferrer'>terms and conditions</a></label>
                    <div className="terms error"></div>
                    <input type="submit" value='Validate Register' />
                </form>
            )}
        </>
    )
}

export default SignUpForm;