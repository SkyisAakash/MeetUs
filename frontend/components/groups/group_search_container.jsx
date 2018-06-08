import React from 'react';
import { connect } from 'react-redux';
import { requestGroups } from '../../actions/group_actions';
import SearchBox from './search_box';


class GroupSearch extends React.Component {

  render () {
    return (
      <SearchBox
        BoxType={this.props.BoxType}
        requestGroups={this.props.requestGroups}
      />
    );
  }
}

const msp = (state) => ({
  BoxType: 'group',
});

const mdp = (dispatch) => ({
  requestGroups: (query) => dispatch(requestGroups(query))
});

export default connect(msp, mdp)(GroupSearch);
