/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { createUser } from './homeActions';

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
const mapStateToProps = (state = {}, ownProps) => ({
    home: state.home,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  // createUser: (params) => dispatch(createUser(params)),
  createUser: bindActionCreators(createUser, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
