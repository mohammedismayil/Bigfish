import React, {Component} from 'react';
import {View, FlatList, TouchableOpacity,Alert,} from 'react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Pressable,
  Image,
  useColorScheme,
} from 'react-native';
export default class HomeCategoryView extends Component {
  render() {
    const DATA = [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-1fff45571e29d72',
        title: 'Fourth Item',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abffb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91fffffaa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0fd-3da1-471f-bd96-145571fffe29d72',
        title: 'Third Item',
      },
      {
        id: '58694a0f-3dda1-d471f-bd96-1fff45571e29d72',
        title: 'Fourth Item',
      },
    ];

    const renderItem = ({item}) => <Item item={item} />;
    const Item = ({item}) => (
      <View style={styles.item}>

          <TouchableOpacity onPress={() => onPressItem(item)}>

            <View style={styles.iteminner}>
            <Image
          style={styles.image}
          source = {{uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}}></Image>
        <Text style={styles.title}>{item.title}</Text>
              </View>
         
              </TouchableOpacity>
     
      </View>
    );

    const onPressItem = (item) => {
     
      Alert.alert("hey you have done wirelessg debugging--");
    }

    return (
     
        <View>
          <FlatList data={DATA} renderItem={renderItem} horizontal />
        </View>
     
    );
  }
}
const styles = StyleSheet.create({
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
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
    
    justifyContent: 'center',
    height: 35,
    // width:100,
  },

  iteminner:{
    flex: 1,
    flexDirection: 'row',
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
