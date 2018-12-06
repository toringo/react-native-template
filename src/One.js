/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import StoreProvider from './boot/StoreProvider';
import AppWithNavigation from './nav/AppWithNavigation';

console.disableYellowBox = true; // eslint-disable-line

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <StoreProvider>
        <AppWithNavigation />
      </StoreProvider>
    );
  }
}

export default App;
