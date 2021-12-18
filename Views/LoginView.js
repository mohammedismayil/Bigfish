import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
  StatusBar,
  TextInput,
} from 'react-native';

export default function LoginView({navigation}) {
  const [email, onChangeEmail] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#13111a'}}>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <View style={styles.greetingBGView}>
        <Text style={styles.greetingTitle}>Let's sign you in</Text>
      </View>
      <View style={styles.greetingSubBGView}>
        <Text style={styles.greetingSubTitle}>Welcome back.</Text>
      </View>
      <View style={styles.greetingSubBGView}>
        <Text style={styles.greetingSubTitle}>You've been missed!</Text>
      </View>
      <View style={styles.TFBGView}>
        <TextInput
          style={styles.TF}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Phone,email or username"
        />
        <TextInput
          style={styles.TF}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
        />
      </View>

      <View style={styles.bottomView}>
        <Text style={styles.donHaveAccount}>
          Don't have an account? Register
        </Text>
        <TouchableOpacity
          // onPress={() => this.props.navigation.navigate('Login')}
          style={styles.registerButton}>
          <Text style={styles.registerbuttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  greetingBGView: {
    marginHorizontal: 40,
    marginTop: 80,
    alignItems: 'center',
  },
  greetingSubBGView: {
    marginHorizontal: 40,
    marginTop: 20,
    alignItems: 'center',
  },
  greetingTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
    // textAlign: 'left',
  },
  greetingSubTitle: {
    color: 'white',

    fontSize: 30,
  },
  donHaveAccount: {
    color: 'grey',

    fontSize: 20,
  },
  bottomView: {
    marginBottom: 10,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    bottom: 25,

    marginLeft: 0,
    paddingHorizontal: 50,
    width: '100%',
    position: 'absolute',
    // backgroundColor: 'white',
  },
  registerButton: {
    flex: 1,
    width: '100%',
    height: 50,
    marginTop: 20,
    marginVertical: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 15,
  },
  registerbuttonText: {
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    // backgroundColor: 'white',
    fontSize: 20,
    height: 25,
    fontWeight: 'bold',
  },
  TFBGView: {
    marginHorizontal: 40,
    marginTop: 40,
    alignItems: 'center',
  },
  TF: {
    backgroundColor: '#1f1c25',
    marginHorizontal: 40,
    width: '100%',
    marginVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});