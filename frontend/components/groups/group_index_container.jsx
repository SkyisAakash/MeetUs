import { connect } from 'react-redux';
import { requestGroups } from '../../actions/group_actions';
import GroupIndex from './group_index';


const msp = state => ({
  // groups: Object.values(state.groups)
});

const mdp = dispatch => ({
  requestGroups:() => dispatch(requestGroups()),
});

export default connect(msp, mdp)(GroupIndex);
