/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import StoreProvider from './boot/StoreProvider';
import Home from './home/HomeScreen';

console.disableYellowBox = true; // eslint-disable-line

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <StoreProvider>
        <Home />
      </StoreProvider>
    );
  }
}

export default App;
