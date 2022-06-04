// @ts-nocheck
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Form from '../utilities/Forms'

const ForgotPin = () => {
  const [email, setEmail] = useState('')
  const [validate, setValidate] = useState({})

  const validateforgotPassword = () => {
    let isValid = true

    let validator = Form.validator({
      email: {
        value: email,
        isRequired: true,
        isEmail: true,
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

  const forgotPassword = (e) => {
    e.preventDefault()

    const validate = validateforgotPassword()

    if (validate) {
      alert('Reset password link is sent to ' + email)
      setValidate({})
      setEmail('')
    }
  }

  return (
    <div className="row g-0 auth-wrapper">
      <div className="d-flex forget-header">
        <Link className="forget-link text-link" to="/login">
          <img src="./images/vector.png" alt="backicon" />
        </Link>
        <div className="mx-auto text-center">
          <h4>Forgot Pin</h4>
          <p className="forget-text">
            Enter your account and we will send instructions
          </p>
        </div>
      </div>
      <div className="auth-main-col auth-body text-center">
        <div className="auth-form-container text-start">
          <form
            className="auth-form"
            method="POST"
            onSubmit={forgotPassword}
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
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-login w-100 theme-btn mx-auto"
              >
                <Link to="/check-email">
                  <h6 className="mb-0">Send Email</h6>
                </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPin
