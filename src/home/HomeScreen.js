/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Platform, StyleSheet, Text, View,
} from 'react-native';
import { createUser } from './homeActions';

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
});
type Props = {};
class Home extends Component<Props> {
  componentDidMount() {
    // this.props.createUser({ name: 'sj' });
  }

  render() {
    console.log('home', this.props);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Home!</Text>
        <Text>{this.props.home.length}</Text>
      </View>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
    home: state.home,
});

const mapDispatchToProps = (dispatch, ownProps) => ({ createUser: createUser(dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(Home);
