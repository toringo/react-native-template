/* @flow */
import { NativeModules } from 'react-native';

const config = {
  enableReduxLogging: !!global.btoa,
  storeKeys: ['accounts', 'drafts', 'outbox', 'settings'],
  cacheKeys: [
    'messages',
    'mute',
    'realm',
    'subscriptions',
    'streams',
    'users',
  ],
};
export default config;
