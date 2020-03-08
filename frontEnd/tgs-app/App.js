import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import StudioProfileScreen from './src/screens/StudioProfileScreen';
import DatesAvailableScreen from './src/screens/DatesAvailableScreen';
import IntroScreen from './src/screens/IntroScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';

const switchNavigator = createSwitchNavigator ({
  Intro: IntroScreen,
  loginFlow: createStackNavigator ({
    Signin: SigninScreen,
    Signup: SignupScreen
  }),
  mainFlow: createBottomTabNavigator ({
    Home: createStackNavigator ({
      Main: HomeScreen,
      DatesAvailable: DatesAvailableScreen
    }),
    Studio: StudioProfileScreen,
    Profile: ProfileScreen
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App ref={(navigator) => { setNavigator(navigator) }} />
    </AuthProvider>
  );
};