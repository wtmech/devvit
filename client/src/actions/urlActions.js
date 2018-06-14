import {ACTIONS} from './types';

export const urlChanged = url => {
  return {
    type: ACTIONS.URL_CHANGED,
    url: url
  };
};