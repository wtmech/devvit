import {ACTIONS} from '../actions/types';

export const urlReducer = (state, [], action) => {
  switch(action.type) {
    case ACTIONS.URL_CHANGED: 
      return action.url
    default:
      return state 
  }
}