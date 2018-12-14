// const initialState = [];
// export default (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_USER':
//       return state.concat(action.user);
//     default:
//       return state;
//   }
// };

import { createActions, handleActions, combineActions } from 'redux-actions';

const defaultState = { counter: 10 };

const { increment, decrement } = createActions({
  INCREMENT: (amount = 1) => ({ amount }),
  DECREMENT: (amount = 1) => ({ amount: -amount }),
});

const reducer = handleActions(
  {
    [combineActions(increment, decrement)]: (
      state,
      { payload: { amount } }
    ) => ({ ...state, counter: state.counter + amount }),
  },
  defaultState
);

export default reducer;
