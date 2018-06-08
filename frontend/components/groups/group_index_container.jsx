import { connect } from 'react-redux';
import { requestGroups, deleteGroup } from '../../actions/group_actions.js';
import { requestGroupMembers } from '../../actions/group_member_actions.js';
import GroupIndex from './group_index.jsx';
import { selectMemberGroups } from '../../reducers/group_selector';

const msp = state => ({
  groups: Object.values(state.entities.groups),
  currentUser: state.session.currentUser,
  search_query: "",
  memberGroups: selectMemberGroups(state)
});

const mdp = dispatch => ({
  requestgroupmembers: () => dispatch(requestGroupMembers()),
  requestGroups:(search_query) => dispatch(requestGroups(search_query)),
});

export default connect(msp, mdp)(GroupIndex);
