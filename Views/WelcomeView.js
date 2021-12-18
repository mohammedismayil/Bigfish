import React, {Component} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {withNavigation} from 'react-navigation';

export default class WelcomeView extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#13111a'}}>
        <Image source={require('../Assets/Images/welcome.png')}></Image>
        <View style={styles.containerMain}>
          <Text style={styles.greetingTitle}>
            Enterprise team collaboration.
          </Text>
          <Text style={styles.greetingSubTitle}>
            Bring together your files , your tools,projects and people.Including
            a new mobile and desktop application
          </Text>
          <View style={styles.bottomView}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}
              style={styles.loginButton}>
              <Text style={styles.loginbuttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}
              style={styles.registerButton}>
              <Text style={styles.registerbuttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    // alignItems: '',
    // justifyContent: 'center',
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
    marginRight: -10,

    // padding: 20,
    // margin: 20,
    marginVertical: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 10,
    // justifyContent: 'center',
  },
  registerButton: {
    flex: 1,
    width: '100%',
    height: 50,
    marginTop: 10,
    // marginLeft: 0,
    // marginLeft: -5,
    // padding: 20,
    // margin: 20,
    marginVertical: 20,
    backgroundColor: '#3a3a43',
    justifyContent: 'center',
    borderRadius: 10,
    // borderTopRightRadius: 10,
    // borderBottomRightRadius: 10,

    // justifyContent: 'center',
  },
  loginbuttonText: {
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    // backgroundColor: 'white',
    fontSize: 20,
    height: 25,
    fontWeight: 'bold',
  },
  registerbuttonText: {
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    // backgroundColor: 'white',
    fontSize: 20,
    height: 25,
    fontWeight: 'bold',
  },
  greetingTitle: {
    color: 'white',
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
