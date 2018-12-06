/* @flow strict-local */
import React from 'react';
import { createBottomTabNavigator, TabBarBottom, createAppContainer } from 'react-navigation';
import HomeScreen from '../home/HomeScreen';
import TopicScreen from '../topic/TopicScreen';
import { IconHome } from '../common/icons';

import { BRAND_COLOR } from '../styles';


export default createAppContainer(
  createBottomTabNavigator(
    {
      home: {
        screen: HomeScreen,
        navigationOptions: {
          tabBarLabel: 'Home',
          tabBarIcon: (props) => (
            <IconHome size={24} color={props.tintColor} />
          ),
        },
      },
      topic: {
        screen: TopicScreen,
        navigationOptions: {
          tabBarLabel: 'Topic',
          tabBarIcon: (props) => (
            <IconHome size={24} color={props.tintColor} />
          ),
        },
      },
    },
    {
      backBehavior: 'none',
      tabBarComponent: TabBarBottom,
      tabBarPosition: 'bottom',
      swipeEnabled: true,
      animationEnabled: true,
      tabBarOptions: {
        showLabel: true,
        showIcon: true,
        upperCaseLabel: false,
        pressColor: BRAND_COLOR,
        activeTintColor: BRAND_COLOR,
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 13,
          margin: 0,
        },
        indicatorStyle: {
          backgroundColor: BRAND_COLOR,
        },
        tabStyle: {
          flex: 1,
        },
        style: {
          backgroundColor: 'transparent',
          // Setting a zero-width border (instead of none) works around an issue
          // affecting react-navigation's TabNavigator.
          // github.com/zulip/zulip-mobile/issues/2065
          borderWidth: 0,
          elevation: 0,
        },
      },
    },
  )
);
