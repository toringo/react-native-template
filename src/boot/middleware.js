/* @flow */
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
// import { REHYDRATE } from 'redux-persist/constants';
import config from '../config';

const middleware = [thunk];

// redux log信息打印
if (config.enableReduxLogging) {
  middleware.push(
    createLogger({
      duration: true,
      // predicate: (getState, action) => action.type === 'MESSAGE_FETCH_COMPLETE',
    }),
  );
}

export default middleware;
