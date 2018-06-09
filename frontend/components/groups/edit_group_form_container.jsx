import React from 'react';
import { connect } from 'react-redux';
import { requestGroup, updateGroup } from '../../actions/group_actions';
import GroupForm from './group_form';
import { openModal, closeModal } from '../../actions/modal_actions';

class EditGroupForm extends React.Component {

  componentDidMount() {
    this.props.requestGroup();
  }

  render () {
    const { group, formType, submitGroup, currentUser } = this.props;
    return (
      <GroupForm
        group={group}
        formType={formType}
        submitGroup={submitGroup}
        currentUser={currentUser} />
    );
  }
}

const msp = (state,ownProps) => ({
  group: state.entities.groups[ownProps.match.params.groupId],
  formType: 'Edit',
  currentUser: state.session.currentUser
});

const mdp = (dispatch,ownProps) => ({
  submitGroup: (group) => dispatch(updateGroup(group)),
  requestGroup: () => dispatch(requestGroup(ownProps.match.params.groupId)),
  otherForm: (
  <button onClick={() => dispatch(openModal('edit'))}>
    Signup
  </button>
),
closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(EditGroupForm);
