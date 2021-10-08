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
export default class HomeTitleHeader extends Component {
  render() {
    return (
      
        <View style={styles.headerView}>
          <Text style={{fontSize: 16, fontWeight: '700'}}>Hello ismayil</Text>
          <Text style={{fontSize: 22, fontWeight: '700'}}>Welcome Back</Text>
        </View>
      
    );
  }
}
const styles = StyleSheet.create({
    headerView:{
  backgroundColor:"white",
  paddingLeft:15,
  fontWeight:'600',
  fontSize: 18,
    },
   
  });