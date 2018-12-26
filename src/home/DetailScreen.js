/* @flow */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import actions from './homeActions';

import { Title } from '../common';
import { IconHome } from '../common/icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
      width: 100,
      height: 38,
      backgroundColor: '#4584ff',
  },
});
type Props = {
    listdetail: Object,
};


class DetailScreen extends PureComponent<Props> {
  render() {
    const { listdetail } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.welcome}>欢迎来到书本详情页</Text>
          <Button
            style={styles.button}
            onPress={() => { this.props.navigation.goBack(); }}
            title="返回"
            color="#841584"
            accessibilityLabel="返回"
          />
        </View>

      </View>
    );
  }
}

export default connect(
)(DetailScreen);
