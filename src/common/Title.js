/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationActions, StackActions } from 'react-navigation';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    paddingLeft: 16,
    paddingRight: 16,
  },
  Center: {
      flex: 1,
      fontSize: 14,
      color: '#333',
      textAlign: 'center',

  },
  sidebox: {
      width: 40,
  },
});
type Props = {
    leftView?: string,
    rightView?: string,
};

export default class Title extends Component<Props> {
  props: Props;

  render() {
    const { leftView, rightView } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.sidebox}>
          {
                leftView || null
            }
        </View>
        <Text style={styles.Center}>首页</Text>
        <View style={styles.sidebox}>
          {
            rightView || null
            }
        </View>
      </View>
    );
  }
}
