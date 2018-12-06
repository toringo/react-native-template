/* @flow */
import { NativeModules } from 'react-native';

const config = {
  enableReduxLogging: !!global.btoa,
  storeKeys: ['accounts', 'drafts', 'outbox', 'settings'],
  cacheKeys: [
    'home',
  ],
};
export default config;
