/* @flow */
import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'; // 状态需要持久化， 离线保存store数据。
import { AsyncStorage } from 'react-native';
import rootReducer from './reducers';
import middleware from './middleware';

// const store = compose(applyMiddleware(...middleware))(createStore)(rootReducer);

const config = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['home'],
  backlist: ['topic'],
  timeout: null,
  version: 1,
  debug: true,
};
if (__DEV__) {
  const xhr = global.originalXMLHttpRequest
      ? global.originalXMLHttpRequest
      : global.XMLHttpRequest;
  global.XMLHttpRequest = xhr;
}


const reducers = persistReducer(config, rootReducer);
const enhancers = [applyMiddleware(...middleware)];

const initialState = {};
const persistConfig = { enhancers };
const store = createStore(reducers, initialState, compose(...enhancers));

const persistor = persistStore(store, persistConfig, () => {
  // console.log('Test', store.getState());
});

export const restore = (onFinished?: () => void) => persistStore(
    store,
    persistConfig,
    onFinished,
  );


export default () => ({ store, persistor });
