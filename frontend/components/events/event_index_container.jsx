import { connect } from 'react-redux';
import { requestEvents, deleteEvent } from '../../actions/event_actions.js';
import { requestGroups, deleteGroup } from '../../actions/group_actions.js';
import { requestUsers } from '../../actions/user_actions.js';
import { requestEventMembers } from '../../actions/event_member_actions.js';
import EventIndex from './event_index.jsx';
import { selectMemberEvents,
  findByDate,
  selectOtherEvents,
  findMyByDate } from '../../reducers/event_selector';

const msp = state => ({
  events: Object.values(state.entities.events),
  // groups: Object.values(state.entities.groups),
  currentUser: state.session.currentUser,
  search_query: "",
  memberEvents: selectMemberEvents(state),
  users: state.entities.users,
  groups: state.entities.groups,
  dateEvents: findByDate(state, new Date("2018-07-10")),
  otherEvents: selectOtherEvents(state)
});

const mdp = dispatch => ({
  requesteventmembers: () => dispatch(requestEventMembers()),
  requestEvents:(search_query) => dispatch(requestEvents(search_query)),
  getusers:() => dispatch(requestUsers()),
  requestGroups:(search_query) => dispatch(requestGroups(search_query)),

});

export default connect(msp, mdp)(EventIndex);
