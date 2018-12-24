import { Platform } from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import MainScreen from '../tabs/MainScreen';
import LoginScreen from '../login/LoginScreen';

// export default createAppContainer(createStackNavigator(
//   {
//     login: { screen: LoginScreen },
//     main: { screen: MainScreen },
//   },
//   {
//     initialRouteName: 'login',
//     headerMode: 'none',
//     cardStyle: {
//       backgroundColor: 'white',
//     },
//     mode: Platform.OS === 'ios' ? 'modal' : 'card',
//   }
// ));

// const AuthenticationNavigator = createStackNavigator({
//     login: { screen: LoginScreen },
//     main: { screen: MainScreen },
// }, {
//     initialRouteName: 'login',
//     headerMode: 'none',
//     cardStyle: {
//         backgroundColor: 'white',
//     },
//     mode: Platform.OS === 'ios' ? 'modal' : 'card',
// }
// );
// export default AuthenticationNavigator;

export default createSwitchNavigator({
    login: { screen: LoginScreen },
    main: { screen: MainScreen },
}, {
    initialRouteName: 'login',
});
