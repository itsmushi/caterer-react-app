// @ts-nocheck
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './screens/Login'
import Register from './screens/Register/Register'
import Checkemail from './screens/Checkemail'
import Selectuser from './screens/Selectuser'
import Enterpin from './screens/Enterpin'
import ForgotPassword from './screens/ForgotPassword'
import ForgotPin from './screens/ForgotPin'
import { Dashboard } from './screens/Dashboard'
import React from 'react'
import { RecoilRoot } from 'recoil'

const Auth = () => {
  return (
    <RecoilRoot>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/forgot-pin" component={ForgotPin} />
          <Route path="/check-email" component={Checkemail} />
          <Route path="/select-user" component={Selectuser} />
          <Route path="/enter-pin" component={Enterpin} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </RecoilRoot>
  )
}

export default Auth
