import { useState } from "react";
import { Link } from "react-router-dom";
import Form from '../../utilities/Forms'

const Enterpin = () => {

  const [email, setEmail] = useState('');
  const [validate, setValidate] = useState({});

  const validateforgotPassword = () => {
    let isValid = true;

    let validator = Form.validator({
      email: {
        value: email,
        isRequired: true,
        isEmail: true
      }
    });

    if (validator !== null) {
      setValidate({
        validate: validator.errors
      })

      isValid = false
    }
    return isValid;
  }

  const forgotPassword = (e) => {
    e.preventDefault();

    const validate = validateforgotPassword();

    if (validate) {
      alert('Reset password link is sent to ' + email);
      setValidate({});
      setEmail('');
    }
  }

  return (
    <div className="row g-0 auth-wrapper">
      <div className="d-flex forget-header">
        <Link className="forget-link text-link" to="/login" ><img src="./images/vector.png" alt="backicon" /></Link>
        <div className="mx-auto text-center">
          <h4>Enter Pin</h4>
          <p className="forget-text">Please Enter your 4 Digit Pin.</p>
        </div>
      </div>
      <div className="text-center">
        <div className="inputpin d-flex justify-content-around mx-auto">
          <div className="pinbox">
            <h4 className="text-center my-4">5</h4>
            <hr className="pinline mx-2"></hr>
          </div>
          <hr className="pinline mx-2 w-10 my-5"></hr>
          <div className="pinbox">
            <h4 className="text-center my-4">5</h4>
            <hr className="pinline mx-2"></hr>
          </div>
          <hr className="pinline mx-2 w-10 my-5"></hr>
          <div className="pinbox">
            <h4 className="text-center my-4">5</h4>
            <hr className="pinline mx-2"></hr>
          </div>
          <hr className="pinline mx-2 w-10 my-5"></hr><div className="pinbox">
            <h4 className="text-center my-4">5</h4>
            <hr className="pinline mx-2"></hr>
          </div>
        </div>
        <div className="auth-form-container text-start">
          <form className="auth-form" method="POST" onSubmit={forgotPassword} autoComplete={'off'}>
            <p className="input-top-text">Email</p>
            <div className="email mb-3">
              <input type="email"
                className={`form-control ${validate.validate && validate.validate.email ? 'is-invalid ' : ''}`}
                id="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.email) ? 'd-block' : 'd-none'}`} >
                {(validate.validate && validate.validate.email) ? validate.validate.email[0] : ''}
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-login w-100 theme-btn mx-auto"><Link to="/check-email"><h6 className="mb-0">Send Email</h6></Link></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Enterpin;