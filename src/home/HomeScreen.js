/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationActions, StackActions } from 'react-navigation';
// import { bindActionCreators } from 'redux';
import {
  StyleSheet, Text, View,
  Button,
} from 'react-native';
import actions from './homeActions';

// import { decrement } from './homeReducer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 40,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  bookList: {
      height: 40,
      backgroundColor: '#fff',
      flexDirection: 'row',
  },
  button: {
      width: 100,
      height: 38,
      backgroundColor: '#4584ff',
  },
});
type Props = {};

const resetAction = StackActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'login' }),
    ],
});

class Home extends Component<Props> {
    handleToDelete=(id: string) => {
        const { bookDelete } = this.props;
        bookDelete(id);
    }

    logout() {
        this.props.navigation.dispatch(resetAction);
        // console.log('this.props.navigation', this.props.navigation);

        // this.props.navigation.navigate('login');
        // this.props.navigation.push({ name: 'login', reset: true });
        // this.props.navigation.goBack(login);
    }

  render() {
    const { bookList } = this.props;
    // console.log('this.props', this.props, this.state, bookList);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Home!</Text>
        {
            bookList.map((item, index) => (
              <View key={item.id} style={styles.bookList}>
                <Text>书本名字:</Text>
                <Text>{item.title}</Text>
                <Text>{item.description}</Text>
                <Button
                  style={styles.button}
                  onPress={() => { this.handleToDelete(item.id); }}
                  title="delete"
                  color="#841584"
                  accessibilityLabel="delete"
                />
              </View>
                ))
        }
        <Button
          style={styles.button}
          onPress={() => { this.logout(); }}
          title="logout"
          color="#841584"
          accessibilityLabel="logout"
        />
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
        bookList: state.home.bookList,
    });
const mapDispatchToProps = (dispatch) => ({
    getBookList: dispatch(actions.bookListGet()),
    bookDelete: (id: string) => dispatch(actions.bookDelete(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);
