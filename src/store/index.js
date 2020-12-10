import { createStore } from 'redux';

const INITIAL_STATE = {
  count: 10
}

function courses(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'TICK':
      return { count: state.count - 1 }
    case 'RESET':
      return { state, count: 10 }
    default:
      return state;
  }
}

const store = createStore(courses);

export default store;