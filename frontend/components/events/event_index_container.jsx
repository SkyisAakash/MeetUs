import { connect } from 'react-redux';
import { requestEvents, deleteEvent } from '../../actions/event_actions.js';
import { requestUsers } from '../../actions/user_actions.js';
import { requestEventMembers } from '../../actions/event_member_actions.js';
import EventIndex from './event_index.jsx';
import { selectMemberEvents } from '../../reducers/event_selector';

const msp = state => ({
  events: Object.values(state.entities.events),
  currentUser: state.session.currentUser,
  search_query: "",
  memberEvents: selectMemberEvents(state)
});

const mdp = dispatch => ({
  requesteventmembers: () => dispatch(requestEventMembers()),
  requestEvents:(search_query) => dispatch(requestEvents(search_query)),
  getusers:() => dispatch(requestUsers())
});

export default connect(msp, mdp)(EventIndex);
