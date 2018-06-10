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
import GroupShowContainer from "./groups/group_show_container.jsx";
import EditGroupForm from "./groups/edit_group_form_container.jsx";
import CreateGroupForm from "./groups/create_group_form_container.jsx";
import EventIndexContainer from "./events/event_index_container.jsx";
import EventShowContainer from "./events/event_show_container.jsx";
import EditEventForm from "./events/edit_event_form_container.jsx";
import CreateEventForm from "./events/create_event_form_container.jsx";
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import LoginContainer from './session/login_container';
import Video from './video/video.jsx';
import Footer from './footer/footer.jsx';
import NavBarContainer from './nav_bar/nav_bar_container';
import HeadingBar from './heading/heading.jsx';
import Modal from './modal/modal.jsx';

const App = () => (
  <div className="page">
    <div>
      <Modal />
   <Route path="/" component={NavBarContainer}/>
   </div>
   <ProtectedRoute exact path="/groups" component={HeadingBar}/>
   <ProtectedRoute exact path="/events" component={HeadingBar}/>
   <div className="mainpage">
     <Switch>
    <AuthRoute exact path="/" component={Video}/>
    <AuthRoute exact path="/signup" component={SignupContainer}/>
    <AuthRoute exact path="/login" component={LoginContainer} />
    <ProtectedRoute exact path="/groups/create" component={CreateGroupForm}/>
    <ProtectedRoute exact path="/groups/:groupId/edit" component={EditGroupForm}/>
    <ProtectedRoute path="/groups/:groupId" component={GroupShowContainer}/>
    <ProtectedRoute exact path="/groups" component={GroupIndexContainer}/>
    <ProtectedRoute exact path="/:groupId/events/create" component={CreateEventForm}/>
    <ProtectedRoute exact path="/events/:eventId/edit" component={EditEventForm}/>
    <ProtectedRoute path="/events/:eventId" component={EventShowContainer}/>
    <ProtectedRoute exact path="/events" component={EventIndexContainer}/>
    <Route path="/" component={Video}/>
    </Switch>
    </div>
    <div>
    <Route path="/" component={Footer} className="routefooter"/>
    </div>
</div>
);

export default App;
