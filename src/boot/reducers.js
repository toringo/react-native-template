/* @flow */
import { combineReducers } from 'redux';
import home from '../home/homeReducer';
import topic from '../topic/topicReducer';
import login from '../login/LoginReducers';


const reducers = {
  login,
  home,
  topic,
};

// export default enableBatching(
//   combineReducers(config.enableReduxSlowReducerWarnings ? logSlowReducers(reducers) : reducers),
// );

export default combineReducers(reducers);
