
// import { REHYDRATE, REGISTER } from 'redux-persist/src/constants';
import { REHYDRATE } from 'redux-persist';

const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE:
      return [{ name: '007' }];
    default:
      return initialState;
  }
};
