import { Action } from '../models/Action';

export const loggedReducer = (state = false, action: Action<'SIGN_IN'>) => {
  switch(action.type) {
    case 'SIGN_IN':
      return !state;
    default:
      return state;
  };
};