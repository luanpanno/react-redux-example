import { Action } from '../models/Action';

export const increment = (): Action => ({ type: 'INCREMENT' });

export const decrement = (): Action => ({ type: 'DECREMENT' });

export const signIn = (): Action => ({ type: 'SIGN_IN' });