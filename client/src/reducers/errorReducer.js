import {ACTIONS} from '../actions/types';
const initialState = {}

export default function(state = initialState, action) {
  switch(action.type) {
    case ACTIONS.GET_ERRORS:
      return action.payload
    default:
      return state;
  }
}