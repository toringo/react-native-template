import { Platform } from 'react-native';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../login/LoginScreen';
import Main from '../tabs/Main';
import DetailScreen from '../home/DetailScreen';

// app内的tab主页
const AppStack = createStackNavigator({
    Main,
    Detail: DetailScreen,
}, {
    headerMode: 'none',
}
);
// app的登录页
const AuthStack = createStackNavigator({ Login: LoginScreen });

export default createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
    // headerMode: 'none',
    cardStyle: {
      backgroundColor: 'white',
    },
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  }
);
