/* @flow */

import type { ChildrenArray } from 'react';
import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore, { restore } from './store';

const { persistor, store } = configureStore();

type Props = {
  children: ChildrenArray<*>,
};
export default class StoreProvider extends Component<Props> {
  componentDidMount() {
    // timing.start('Store hydration');
    // restore(() => {
    //   timing.end('Store hydration');
    // });
    // restore(() => {});
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
          {this.props.children}
        </PersistGate>
      </Provider>);
  }
}
