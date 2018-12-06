/**
 * Sample React Native Home
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Platform, StyleSheet, Text, View,
} from 'react-native';

import { addTopic } from './topicActions';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n'
    + 'Shake or press menu button for dev menu',
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
type Props = {};
class Home extends Component<Props> {
  componentDidMount() {
    this.props.addTopic({ topic: 'tyus' });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Topic!</Text>
        <Text style={styles.instructions}>To get started, edit Home.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  topics: state.topic,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addTopic: addTopic(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
