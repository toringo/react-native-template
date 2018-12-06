/* @flow strict-local */
import React, { PureComponent } from 'react';
import { View } from 'react-native';
import MainTabs from './Main';

export default class MainScreenWithTabs extends PureComponent<{}> {
  context: Context;

  static contextTypes = {
    styles: () => null,
  };

  render() {
    const { styles } = this.context;

    return (
      <MainTabs />
    );
  }
}
