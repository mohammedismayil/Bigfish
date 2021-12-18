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
} from 'react-native';

export default function LoginView({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#13111a'}}>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
    </SafeAreaView>
  );
}
