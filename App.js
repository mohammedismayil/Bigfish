/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ProfileView from './Views/ProfileView';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {

  useEffect( () => {
    SplashScreen.hide();
  }

  )
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
          <ScrollView  >
          <View style={styles.bgView}>
          <ProfileView></ProfileView>
          <ProfileView></ProfileView>
          <ProfileView></ProfileView>
          <ProfileView></ProfileView>
          <ProfileView></ProfileView>
          <ProfileView></ProfileView>
          <ProfileView></ProfileView>
          <ProfileView></ProfileView>
          <ProfileView></ProfileView>
          <ProfileView></ProfileView>
          <ProfileView></ProfileView>
          <ProfileView></ProfileView>
          <ProfileView></ProfileView>
          <ProfileView></ProfileView>
          <ProfileView></ProfileView>
          <ProfileView></ProfileView>
          <ProfileView></ProfileView>
          <ProfileView></ProfileView>
          <ProfileView></ProfileView>
          <ProfileView></ProfileView>
          <ProfileView></ProfileView>
          <ProfileView></ProfileView>
          <ProfileView></ProfileView>
          <ProfileView></ProfileView>
        </View>
            </ScrollView>

            <View style={styles.container}>
            <View style={styles.anotherbgView}>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
        </View>
              </View>


      
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bgView: {
    flex: 1,
    backgroundColor: '#9FA8DA',
    paddingLeft: 0,
    marginTop: 30,
    flexDirection: 'column',
  },
  anotherbgView: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    width:200,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
});

export default App;
