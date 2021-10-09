import React, {Component} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
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

    const renderItem = ({item}) => <Item title={item.title} />;
    const Item = ({title}) => (
      <View style={styles.item}>

          {/* <TouchableOpacity> */}
          <Image
          style={styles.image}
          source={require('/home/ismayil/ismayildemo/AwesomeProject/Assets/Images/profile.jpg')}></Image>
        <Text style={styles.title}>{title}</Text>
              {/* </TouchableOpacity> */}
     
      </View>
    );

    const flatListTapped = ({id}) => {
        console.log(id)
        console.log("flat list tapped")
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
