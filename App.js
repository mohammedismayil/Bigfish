/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View,StyleSheet,StatusBar } from 'react-native';
import HomeCategoryView from './Views/HomeCategoryView';
import HomePage from './Views/HomePage';






import HomeTitleHeader from './Views/HomeTitleHeader';
import ProfileView from './Views/ProfileView';



const App: () => Node = () => {


  return (
    <View style={styles.background}>
<HomePage>

</HomePage>

    </View>

  );
};

const styles = StyleSheet.create({
  background:{
    backgroundColor:'white',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f9c2ff',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 7,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    height: 30,
  },
  title: {
    fontSize: 15,
    paddingHorizontal: 5,
  },
  image: {
    height: 20,
    width: 20,
  },
});


export default App;
