import React from 'react';
import { connect } from 'react-redux';
import { requestGroup, updateGroup } from '../../actions/group_actions';
import GroupForm from './group_form';


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
  formType: 'create',
  currentUser: state.session.currentUser
});

const mdp = (dispatch,ownProps) => ({
  submitGroup: (group) => dispatch(updateGroup(group)),
  requestGroup: () => dispatch(requestGroup(ownProps.match.params.groupId))
});

export default connect(msp, mdp)(EditGroupForm);
