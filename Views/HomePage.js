import React, { Component } from 'react'

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
import ProfileView from './ProfileView';
import HomeTitleHeader from './HomeTitleHeader';
import HomeCategoryView from './HomeCategoryView';
export default class HomePage extends Component {

    render() {
        const isDarkMode = useColorScheme() === 'dark';

        const backgroundStyle = {
          backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        };
        return (
            
            
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={backgroundStyle}>
              <ScrollView>
                <HomeTitleHeader>
                  </HomeTitleHeader>
                  <HomeCategoryView>
                    </HomeCategoryView>
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
          
        )
    }
}
const styles = StyleSheet.create({
    headerView: {
      backgroundColor: 'white',
      paddingLeft: 15,
      fontWeight: '600',
      fontSize: 18,
    },
    bgView: {
      flex: 1,
      backgroundColor: '#9FA8DA',
      paddingLeft: 0,
      marginTop: 0,
      flexDirection: 'column',
    },
    anotherbgView: {
      backgroundColor: 'green',
      justifyContent: 'center',
      alignItems: 'center',
      width: 200,
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