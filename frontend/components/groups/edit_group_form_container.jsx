import React from 'react';
import { connect } from 'react-redux';
import { requestGroup, updateGroup, removegrpErrors } from '../../actions/group_actions';
import GroupForm from './group_form';
import { openModal, closeModal } from '../../actions/modal_actions';

class EditGroupForm extends React.Component {

  componentDidMount() {
    this.props.requestGroup();
  }

  render () {
    const { group, formType, submitGroup, currentUser, errors } = this.props;
    return (
      <GroupForm
        group={group}
        formType={formType}
        submitGroup={submitGroup}
        currentUser={currentUser}
        errors={errors}
        removegrpErrors={removegrpErrors} />
    );
  }
}

const msp = (state,ownProps) => ({
  group: state.entities.groups[ownProps.match.params.groupId],
  formType: 'Edit',
  currentUser: state.session.currentUser,
  errors: state.errors.group
});

const mdp = (dispatch,ownProps) => ({
  submitGroup: (group) => dispatch(updateGroup(group)),
  requestGroup: () => dispatch(requestGroup(ownProps.match.params.groupId)),
  removegrpErrors: () => dispatch(removegrpErrors)
});

export default connect(msp, mdp)(EditGroupForm);
