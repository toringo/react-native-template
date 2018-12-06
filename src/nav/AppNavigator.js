import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MainScreen from '../tabs/MainScreen';


export default createStackNavigator(
  {
    main: { screen: MainScreen },
  },
  {
    initialRouteName: 'main',
    headerMode: 'none',
    cardStyle: {
      backgroundColor: 'white',
    },
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  }
);
