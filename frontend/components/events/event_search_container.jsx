// import React from 'react';
// import { connect } from 'react-redux';
// import { requestEvents } from '../../actions/event_actions';
// import SearchBox from './search_box';
//
//
// class EventSearch extends React.Component {
//
//   render () {
//     return (
//       <SearchBox
//         BoxType={this.props.BoxType}
//         requestItems={this.props.requestEvents}
//       />
//     );
//   }
// }
//
// const msp = (state) => ({
//   BoxType: 'event',
// });
//
// const mdp = (dispatch) => ({
//   requestEvents: (query) => dispatch(requestEvents(query))
// });
//
// export default connect(msp, mdp)(EventSearch);
