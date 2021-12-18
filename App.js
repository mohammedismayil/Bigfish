/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import ProfileView from './Views/ProfileView';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeView from './Views/WelcomeView';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginView from './Views/LoginView';
import BackButton from './Components/BackButton';

const Stack = createNativeStackNavigator();
const App: () => Node = () => {
  return (
    // #181721
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={WelcomeView}
          options={{
            title: 'Welcome',
            headerShown: false,
            headerTransparent: true,
            headerStyle: {
              backgroundColor: 'transparent',
            },
          }}
        />
        <Stack.Screen
          name="Login"
          defaultNavigationOptions={false}
          options={{
            title: '',
            headerLeft: props => (
              <BackButton
                onPress={() => navigation.navigate('Home')}
                navigation={props.navigation}
              />
            ),
            headerTintColor: 'white',
            headerTransparent: true,
            headerStyle: {
              backgroundColor: 'transparent',
            },
          }}
          component={LoginView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
