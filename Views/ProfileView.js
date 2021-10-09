import React, {Component} from 'react';
import {
  Image,
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
        <Image style={styles.image} source = {{uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}}></Image>
        <View style={styles.profileContent}>
        <Text style={{ fontSize: 20,fontWeight: '700' }}>Ismayil</Text>
        <Text style={{ fontSize: 20 }}>25</Text>

        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  bgView: {
    flex: 1,
    backgroundColor: '#9FA8DA',
    paddingLeft: 10,
    height: 'auto',
    flexDirection:'row',
    // backgroundColor: 'blue',
    marginVertical: 5,
    paddingVertical:10,
    alignContent:'center',
    alignItems:'center',
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
  image:{
      width:50,
      height:50,
      borderRadius:30
  },
  profileContent:{
      paddingLeft:10,
  }
});
