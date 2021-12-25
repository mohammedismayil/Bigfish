import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

export default function HomeHeader() {
  return (
    <View style={styles.bgView}>
      <View style={styles.locationBGView}>
        <Text style={styles.locationHeading}>Anbu Nagar,Tamilnadu,India</Text>
        <Text>Anbu Nagar,Tamilnadu,India</Text>
      </View>
      <View style={styles.offerBGView}>
        <Text>Offers</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  bgView: {
    display: 'flex',
    flexDirection: 'row',
    // height: 300,
    // width: 400,
    // backgroundColor: 'red',
    alignContent: 'flex-end',
    alignContent: 'center',
    // alignItems: 'center',
    // padding: 20,
    // margin: 10,
  },
  locationBGView: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    // height: 'auto',
  },
  offerBGView: {
    flex: 1,
    flexDirection: 'row',
    // height: 100,
    alignContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  locationHeading: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
  },
});
