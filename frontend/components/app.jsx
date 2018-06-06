import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import SignupContainer from "./session/signup_container.js";
import GroupIndexContainer from "./groups/group_index_container.jsx";
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import LoginContainer from './session/login_container';
import NavBarContainer from './nav_bar/nav_bar_container';

const App = () => (
  <div>
    <Route path="/" component={NavBarContainer}/>
    <AuthRoute path="/signup" component={SignupContainer}/>
    <AuthRoute path="/login" component={LoginContainer} />
    <ProtectedRoute path="/groups" component={GroupIndexContainer}/>
  </div>
);

export default App;
