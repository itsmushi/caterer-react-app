import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { PinInputComponent } from '../components/pinInputComponent'

const Enterpin = () => {
  const history = useHistory()
  const [pin, setPin] = useState('')
  const [pinIsCorrect, setPinIsCorrect] = useState(true)

  function onClear() {
    let oldPin = pin.slice(0, -1)
    return setPin((pin) => {
      return oldPin
    })
  }

  function onSubmit() {
    console.log('pin inputed', pin)
    // setPinIsCorrect(false)
    history.push('/dashboard')
  }
  function addPassword(value) {
    const currentPin = value.target.innerText
    return setPin((pin) => {
      return pin + currentPin
    })
  }

  return (
    <div className="row g-0 auth-wrapper">
      <div className="d-flex forget-header">
        <Link className="forget-link text-link" to="/login">
          <img src="./images/vector.png" alt="backicon" />
        </Link>
        <div className="mx-auto text-center">
          <h4>Enter Pin</h4>
          <p className="forget-text">Please Enter your 4 Digit Pin.</p>
        </div>
      </div>
      <div className="text-center">
        <PinInputComponent pin={pin} />

        <div
          className={`invalid-feedback text-centre ${
            pinIsCorrect ? 'd-none' : 'd-block'
          }`}
        >
          Invalid Pin
        </div>

        <div className="auth-option text-center pt-4 text-bold">
          <Link className="text-link text-lightgreen" to="/forgot-pin">
            <h6>Forgot Pin?</h6>
          </Link>
        </div>

        <div>
          <div className="btnContainer pt-3">
            <button onClick={addPassword} className="btn btn-pin ">
              1
            </button>
            <button onClick={addPassword} className="btn btn-pin mx-5">
              2
            </button>
            <button onClick={addPassword} className="btn btn-pin">
              3
            </button>
          </div>
          <div className="btnContainer pt-3">
            <button onClick={addPassword} className="btn btn-pin">
              4
            </button>
            <button onClick={addPassword} className="btn btn-pin mx-5">
              5
            </button>
            <button onClick={addPassword} className="btn btn-pin">
              6
            </button>
          </div>
          <div className="btnContainer pt-3">
            <button onClick={addPassword} className="btn btn-pin">
              7
            </button>
            <button onClick={addPassword} className="btn btn-pin mx-5">
              8
            </button>
            <button onClick={addPassword} className="btn btn-pin">
              9
            </button>
          </div>
          <div className="btnContainer pt-3">
            <button
              disabled={pin.length === 0 ? true : false}
              onClick={onClear}
              className="btn btn-pin action-pin-btn"
            >
              X
            </button>

            <button className="btn btn-pin mx-5">0</button>
            <button
              disabled={pin.length === 4 ? false : true}
              onClick={onSubmit}
              className="btn btn-pin action-pin-btn"
            >
              {'>'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Enterpin
