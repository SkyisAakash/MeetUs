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
import Video from './video/video.jsx';
import Footer from './footer/footer.jsx';
import NavBarContainer from './nav_bar/nav_bar_container';

const App = () => (
  <div className="page">
    <div>
   <Route path="/" component={NavBarContainer}/>
   </div>
   <div className="mainpage">
    <Route exact path="/" component={Video}/>
    <AuthRoute exact path="/signup" component={SignupContainer}/>
    <AuthRoute exact path="/login" component={LoginContainer} />
    <ProtectedRoute path="/groups" component={GroupIndexContainer}/>
    </div>
    <div>
    <Route path="/" component={Footer} className="routefooter"/>
    </div>
</div>
);

export default App;
