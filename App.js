/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
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
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    // #181721

    <SafeAreaView style={{flex: 1, backgroundColor: '#27242d'}}>
      <View style={styles.containerMain}>
        <Text style={styles.greetingTitle}>Enterprise team collaboration.</Text>
        <Text style={styles.greetingSubTitle}>
          Bring together your files , your tools,projects and people.Including a
          new mobile and desktop application
        </Text>
        <View style={styles.bottomView}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginbuttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerbuttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    flex: 1,
    flexDirection: 'row',
    // width: '50%',
    paddingHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 25, //Here is the trick
  },
  textStyle: {
    color: '#fff',
    fontSize: 18,
  },
  loginButton: {
    flex: 1,
    width: '100%',
    height: 50,
    marginTop: 10,
    // padding: 20,
    // margin: 20,
    marginVertical: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 5,
    // justifyContent: 'center',
  },
  registerButton: {
    flex: 1,
    width: '100%',
    height: 50,
    marginTop: 10,
    // padding: 20,
    // margin: 20,
    marginVertical: 20,
    backgroundColor: 'grey',
    justifyContent: 'center',
    borderRadius: 5,
    // justifyContent: 'center',
  },
  loginbuttonText: {
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    // backgroundColor: 'white',
    fontSize: 20,
    height: 25,
  },
  registerbuttonText: {
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    // backgroundColor: 'white',
    fontSize: 20,
    height: 25,
  },
  greetingTitle: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
  },
  greetingSubTitle: {
    color: 'grey',
    padding: 30,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});
const showAlert = () =>
  Alert.alert(
    'Alert Title',
    'My Alert Msg',
    [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed,OK'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => console.log('OK Pressed'),
      },
    ],
    {cancelable: false},
  );

export default App;
