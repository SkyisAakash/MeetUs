import { connect } from 'react-redux';
import { createGroup } from '../../actions/group_actions';
import GroupForm from './group_form';

const msp = (state,ownProps) => ({
  group: {description:'', title:'', organizer_id:state.session.currentUser.id, image_url:"https://s26.postimg.cc/i809pisxl/food.jpg"},
  formType: 'create',
  currentUser: state.session.currentUser
});

const mdp = (dispatch,ownProps) => ({
  submitGroup: (group) => dispatch(createGroup(group))
});

export default connect(msp, mdp)(GroupForm);
