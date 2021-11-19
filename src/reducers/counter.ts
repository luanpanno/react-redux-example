import { Action } from '../models/Action';

export const counterReducer = (state = 0, action: Action<'INCREMENT' | 'DECREMENT'>) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};