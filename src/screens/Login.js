// @ts-nocheck
import React from 'react'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Form from '../utilities/Forms'

const Login = () => {
  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [validate, setValidate] = useState({})
  const [showPassword, setShowPassword] = useState(false)

  const validateLogin = () => {
    let isValid = true

    let validator = Form.validator({
      email: {
        value: email,
        isRequired: true,
        isEmail: true,
      },
      password: {
        value: password,
        isRequired: true,
        minLength: 6,
      },
    })

    if (validator !== null) {
      setValidate({
        validate: validator.errors,
      })

      isValid = false
    }
    return isValid
  }

  const authenticate = (e) => {
    e.preventDefault()

    const validate = validateLogin()

    if (validate) {
      setValidate({})
      setEmail('')
      setPassword('')
      // alert('Successfully Login');
      history.push('/select-user')
    }
  }

  const togglePassword = (e) => {
    if (showPassword) {
      setShowPassword(false)
    } else {
      setShowPassword(true)
    }
  }

  return (
    <div className="row g-0">
      <div className="text-center title">
        <img src="./logo.png" alt="logo" className="title-logo" />
        <p className="title-text">CATERER APP</p>
      </div>

      <div className="auth-main-col text-center text-bold">
        <div className="d-flex flex-column align-content-end ">
          <div className="auth-body">
            <div className="auth-form-container text-start">
              <form
                className="auth-form"
                method="POST"
                onSubmit={authenticate}
                autoComplete={'off'}
              >
                <p className="input-top-text">Email</p>
                <div className="email mb-3">
                  <input
                    type="email"
                    className={`form-control ${
                      validate.validate && validate.validate.email
                        ? 'is-invalid '
                        : ''
                    }`}
                    id="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <div
                    className={`invalid-feedback text-start ${
                      validate.validate && validate.validate.email
                        ? 'd-block'
                        : 'd-none'
                    }`}
                  >
                    {validate.validate && validate.validate.email
                      ? validate.validate.email[0]
                      : ''}
                  </div>
                </div>
                <p className="input-top-text">Password</p>
                <div className="password mb-3">
                  <div className="input-group">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className={`form-control ${
                        validate.validate && validate.validate.password
                          ? 'is-invalid '
                          : ''
                      }`}
                      name="password"
                      id="password"
                      value={password}
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                      type="button"
                      className="btn btn-outline-primary btn-md"
                      onClick={(e) => togglePassword(e)}
                    >
                      <i
                        className={
                          showPassword ? 'far fa-eye' : 'far fa-eye-slash'
                        }
                      ></i>{' '}
                    </button>

                    {validate.validate && validate.validate.password && (
                      <div className={`invalid-feedback text-start`}>
                        {validate.validate && validate.validate.password
                          ? validate.validate.password[0]
                          : ''}
                      </div>
                    )}
                  </div>

                  <div className="extra mt-3 row justify-content-between">
                    <div>
                      <Link to="/forgot-password" className="text-lightgreen">
                        <u> Forgot Password? </u>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-login w-100 theme-btn mx-auto"
                  >
                    <h6 className="mb-0">Log in</h6>
                  </button>
                </div>
              </form>
              <div className="auth-option text-center pt-4 text-bold">
                Don't have an Account?{' '}
                <Link className="text-link text-lightgreen " to="/register">
                  <u>
                    {' '}
                    <h6 className="d-inline">Register</h6>{' '}
                  </u>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
