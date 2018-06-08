import { connect } from 'react-redux';
import { requestGroups, deleteGroup } from '../../actions/group_actions.js';
import GroupIndex from './group_index.jsx';


const msp = state => ({
  groups: Object.values(state.entities.groups),
  currentUser: state.session.currentUser,
  search_query: ""
});

const mdp = dispatch => ({
  requestGroups:(search_query) => dispatch(requestGroups(search_query)),
});

export default connect(msp, mdp)(GroupIndex);
