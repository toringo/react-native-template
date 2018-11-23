/* @flow */
import { combineReducers } from 'redux';
import home from '../home/homeReducer';


const reducers = {
  home,
};

// export default enableBatching(
//   combineReducers(config.enableReduxSlowReducerWarnings ? logSlowReducers(reducers) : reducers),
// );

export default combineReducers(reducers);
