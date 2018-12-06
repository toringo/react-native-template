/* @noflow */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './AppNavigator';

type Props = {};

class AppWithNavigation extends PureComponent<Props> {
  render() {
    const AppNavigators = createAppContainer(AppNavigator);
    return (
      <AppNavigators />
    );
  }
}

export default AppWithNavigation;
