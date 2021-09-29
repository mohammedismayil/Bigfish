import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
export default class ProfileView extends Component {
  render() {
    return (
      <View style={styles.bgView}>
        <Text>Ismayil</Text>
        <Text>25</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    bgView: {
      flex: 1,
      backgroundColor: '#9FA8DA',
      paddingLeft: 10,
      height:70,
      backgroundColor:'blue',
      marginVertical:5,
    },
    anotherbgView: {
      flex: 1,
      backgroundColor: 'green',
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
  });