/* @flow strict-local */
import React from 'react';
import { createBottomTabNavigator, TabBarBottom, createAppContainer, StackNavigator, createStackNavigator, createTabNavigator } from 'react-navigation';
import HomeScreen from '../home/HomeScreen';
import TopicScreen from '../topic/TopicScreen';
import { IconHome } from '../common/icons';

import { BRAND_COLOR } from '../styles';


// // 定义首页 Tab
// const HomeTabScreen = createStackNavigator(
//     {
//         home: {
//             screen: HomeScreen,
//         },
//     },
//     {
//         headerMode: 'screen',
//     }
// );
// const TopicTabScreen = createStackNavigator(
//     {
//         topic: {
//             screen: TopicScreen,
//         },
//     },
//     {
//         headerMode: 'screen',
//     }
// );

// const MainScreenNavigator = createAppContainer(createBottomTabNavigator({
//     HomeTabScreen: {
//         screen: HomeTabScreen,
//         navigationOptions: {
//             tabBarLabel: 'Home',
//             tabBarIcon: (props) => (
//               <IconHome size={24} color={props.tintColor} />
//             ),
//         },
//     },
//     TopicTabScreen: {
//         screen: TopicTabScreen,
//         navigationOptions: {
//             tabBarLabel: 'Topic',
//             tabBarIcon: (props) => (
//               <IconHome size={24} color={props.tintColor} />
//             ),
//         },
//     },
// },
// {
//     initialRouteName: 'HomeTabScreen',
//     lazy: true,
//     animationEnabled: false,
//     tabBarPosition: 'bottom',
//     swipeEnabled: false,
//     tabBarOptions: {
//         showLabel: true,
//         showIcon: true,
//         upperCaseLabel: false,
//         pressColor: BRAND_COLOR,
//         activeTintColor: BRAND_COLOR,
//         inactiveTintColor: 'gray',
//         labelStyle: {
//           fontSize: 13,
//           margin: 0,
//         },
//         indicatorStyle: {
//           backgroundColor: BRAND_COLOR,
//         },
//         tabStyle: {
//           flex: 1,
//         },
//         style: {
//           backgroundColor: 'transparent',
//           borderWidth: 0,
//           elevation: 0,
//         },
//       },
// }
// ));

// export default MainScreenNavigator;

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
