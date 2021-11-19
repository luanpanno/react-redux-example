import { createStore } from 'redux';

type Action = {
  type: 'INCREMENT' | 'DECREMENT';
};

// ACTION
const increment = (): Action => ({ type: 'INCREMENT' });
const decrement = (): Action => ({ type: 'DECREMENT' });

// REDUCER
const counter = (state = 0, action: Action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  }
};

// STORE
const store = createStore(counter);

// DISPLAY IT ON CONSOLE
store.subscribe(() => console.log(store.getState()));

// DISPATCH
store.dispatch(increment());
store.dispatch(decrement());