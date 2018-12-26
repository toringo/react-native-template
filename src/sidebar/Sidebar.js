/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationActions, StackActions, createDrawerNavigator } from 'react-navigation';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import HomeScreen from '../home/HomeScreen';

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
  sidebar: {
      marginTop: 20,
  },
});

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <View
      style={{ backgroundColor: 'white', width: 200 }}
    >
      <TouchableOpacity
        onPress={() => props.navigation.closeDrawer()}
      >
        <View style={styles.sidebar}>
          <Text>这是一个侧边栏</Text>
        </View>
      </TouchableOpacity>
    </View>
  </ScrollView>
    );

const Drawer = createDrawerNavigator({
    home: {
        screen: HomeScreen,
    },
}, {
    nitialRouteName: 'home',
    drawerWidth: 200, // 展示的宽度
    drawerPosition: 'left', // 抽屉在左边还是右边
    contentComponent: CustomDrawerContentComponent, // 自定义抽屉组件
});

export default Drawer;
