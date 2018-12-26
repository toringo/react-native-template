/* @flow strict-local */
import React from 'react';
import { createBottomTabNavigator, TabBarBottom } from 'react-navigation';
import TopicScreen from '../topic/TopicScreen';
import { IconHome } from '../common/icons';
import Drawer from '../sidebar/Sidebar';

import { BRAND_COLOR } from '../styles';

export default createBottomTabNavigator(
    {
      home: {
        screen: Drawer,
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
          borderWidth: 0,
          elevation: 0,
        },

      },
    },
  );
