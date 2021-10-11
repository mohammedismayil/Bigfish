import React, { Component } from 'react'
import { Text, View,Image,FlatList ,StyleSheet,TouchableOpacity,} from 'react-native'

export default class HomeFavouriteView extends Component {
    render() {
        const DATA = [
            {
              id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
              name: 'Cheese Burger',
              type:'Fresh Patty',
              price:'$25.00',
            },
            {
              id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
              name: 'Second Item',
              type:'Fresh Patty',
              price:'$25.00',
            },
            {
              id: '58694a0f-3da1-471f-bd96-145571e29d72',
              name: 'Third Item',
              type:'Fresh Patty',
              price:'$25.00',
            },
            {
              id: '58694a0f-3da1-471f-bd96-1fff45571e29d72',
              name: 'Fourth Item',
              type:'Fresh Patty',
              price:'$25.00',
            },
            {
              id: 'bd7acbea-c1b1-46c2-aed5-3ad53abffb28ba',
              name: 'First Item',
              type:'Fresh Patty',
              price:'$25.00',
            },
            {
              id: '3ac68afc-c605-48d3-a4f8-fbd91fffffaa97f63',
              name: 'Second Item',
              type:'Fresh Patty',
              price:'$25.00',
            },
            {
              id: '58694a0fd-3da1-471f-bd96-145571fffe29d72',
              name: 'Third Item',
              type:'Fresh Patty',
              price:'$25.00',
            },
            {
              id: '58694a0f-3dda1-d471f-bd96-1fff45571e29d72',
              name: 'Fourth Item',
              type:'Fresh Patty',
              price:'$25.00',
            },
          ];
          const renderItem = ({item}) => <Item item={item} />;
          const Item = ({item}) => (
            <View style={styles.item}>
      
                
                <Image
                style={styles.image}
                source = {{uri:'https://media.istockphoto.com/photos/pizza-picture-id184946701?k=20&m=184946701&s=612x612&w=0&h=LRc4BfIMzP3QW9QKr5eria66F1ZeV2EY8xXeva-E6io='}}></Image>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.type}>{item.type}</Text>
              <View style={styles.ratingpriceview}>
              <Image
                style={styles.ratingimage}
                source = {{uri:'https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png'}}></Image>
                  <View style={styles.priceview}>
                  <Text style={styles.pricetext}>{item.price}</Text>
                  </View>
                 
              </View>
              
           
            </View>
          );
        //   const _onPress = () => {
        //     console.log("hey")
        //   };
        return (
            <View>
                <Text> Favourites </Text>
                <TouchableOpacity onPress={this._onPress}>
                <FlatList data={DATA} renderItem={renderItem} horizontal />
                 
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    
    item: {
      flex: 0,
      flexDirection: 'column',
      backgroundColor: '#f9c2ff',
    //   padding: 3,
      marginLeft:15,
      marginVertical: 15,
      marginHorizontal: 5,
      borderRadius: 5,
    //   alignItems: 'center',
      flex: 1,
    //   justifyContent: 'center',
      height: 200,
      width: 140,
    },
    name: {
      fontSize: 18,
      paddingHorizontal: 5,
    },
    type: {
        fontSize: 13,
        paddingHorizontal: 5,
      },
    image: {
      height: 130,
      width: 140,
      resizeMode:'contain',
      alignItems: 'center',
       alignSelf:'center',
       marginTop:0,
       padding:0,
      
    },
    ratingimage: {
        width: 40,
        height:20,
         
      },
    ratingpriceview:{
        flex: 1,
        flexDirection:'row',
    },
    priceview: {
        right:5,
        position:'absolute',
         
      },
    pricetext:{
        fontSize: 15,
        paddingHorizontal: 5,
        
    }
  });
  