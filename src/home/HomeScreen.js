/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationActions, StackActions } from 'react-navigation';
// import { bindActionCreators } from 'redux';
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
  bookList: {
      backgroundColor: '#fff',
      padding: 10,
  },
  row: {
      flexDirection: 'row',
  },
  button: {
      width: 100,
      height: 38,
      backgroundColor: '#4584ff',
  },
});
type Props = {};

// const resetAction = StackActions.reset({
//     index: 0,
//     actions: [
//         NavigationActions.navigate({ routeName: 'login' }),
//     ],
// });

class Home extends Component<Props> {
    handleToDelete=(id: string) => {
        const { bookDelete } = this.props;
        bookDelete(id);
    }

    logout() {
        // this.props.navigation.dispatch(resetAction);
        this.props.navigation.navigate('Auth');
    }

    handleToDetailScreen=(item: Object) => {
        console.log('item', item);
        this.props.navigation.navigate('Detail', item);
    }

  render() {
    const { bookList } = this.props;
    console.log('this.props.navigation', this.props.navigation);
    return (
      <View style={styles.container}>
        <Title
          leftView={(
            <TouchableOpacity onPress={() => { this.props.navigation.openDrawer(); }}>
              <IconHome size={24} color="red" />
            </TouchableOpacity>
          )}
        />
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to Home!</Text>
          {
            bookList.map((item, index) => (
              <TouchableOpacity key={item.id} onPress={() => { this.handleToDetailScreen(item); }}>
                <View style={styles.bookList}>
                  <View style={styles.row}>
                    <Text>
                        书本名字:
                      {item.title}
                    </Text>
                    <Button
                      style={styles.button}
                      onPress={() => { this.handleToDelete(item.id); }}
                      title="delete"
                      color="#841584"
                      accessibilityLabel="delete"
                    />
                  </View>
                  <Text>{item.description}</Text>
                </View>
              </TouchableOpacity>

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
