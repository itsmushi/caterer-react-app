import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/views/Login";
import Register from "./components/views/Register";
import Forgot from "./components/views/Forgot";
import Checkemail from "./components/views/Checkemail";
import Selectuser from "./components/views/Selectuser";
import Enterpin from "./components/views/Enterpin";

const Auth = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/forgot-password' component={Forgot} />
        <Route path='/check-email' component={Checkemail} />
        <Route path='/select-user' component={Selectuser} />
        <Route path='/enter-pin' component={Enterpin} />
      </Switch>
    </Router>
  );
}

export default Auth;
