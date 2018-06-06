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
import Video from './video/video';
import NavBarContainer from './nav_bar/nav_bar_container';

const App = () => (
  <div>
    <NavBarContainer/>
    <AuthRoute exact path="/login" component={LoginContainer} />
    <AuthRoute exact path="/signup" component={SignupContainer}/>
    <ProtectedRoute path="/groups" component={GroupIndexContainer}/>
    <Route exact path="/" component={Video}/>
  </div>
);

export default App;
