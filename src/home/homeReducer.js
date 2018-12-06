
import { REHYDRATE } from 'redux-persist';

const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return state.concat(action.user);
    default:
      return initialState;
  }
};
