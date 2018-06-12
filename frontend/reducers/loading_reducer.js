import {
  RECEIVE_GROUP,
  RECEIVE_GROUPS,
  RECEIVE_GRP_ERRORS,
  START_RECEIVING_GROUP,
  START_RECEIVING_GROUPS
} from '../actions/group_actions';

const initialState = {
  indexLoading: false,
  detailLoading: false
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_GROUP:
      return Object.assign({}, state, { indexLoading: false });
    case RECEIVE_GROUPS:
    return Object.assign({}, state, { indexLoading: false });
    case START_RECEIVING_GROUP:
      return Object.assign({}, state, { indexLoading: true });
    case START_RECEIVING_GROUPS:
    return Object.assign({}, state, { indexLoading: true });
    case RECEIVE_GRP_ERRORS:
    return Object.assign({}, state, { indexLoading: false });
    default:
      return state;
  }
};

export default loadingReducer;
