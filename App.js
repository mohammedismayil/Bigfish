/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';
import HomeCategoryView from './Views/HomeCategoryView';
import HomePage from './Views/HomePage';
import {NavigationContainer} from '@react-navigation/native';

import HomeTitleHeader from './Views/HomeTitleHeader';
import ProfileView from './Views/ProfileView';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const App: () => Node = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f9c2ff',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 7,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    height: 30,
  },
  title: {
    fontSize: 15,
    paddingHorizontal: 5,
  },
  image: {
    height: 20,
    width: 20,
  },
});

export default App;
