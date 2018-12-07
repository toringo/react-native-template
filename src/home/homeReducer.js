
import { REHYDRATE } from 'redux-persist';

const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE:
      return [].concat(action.payload.home);
    case 'ADD_USER':
      return state.concat(action.user);
    default:
      return state;
  }
};
