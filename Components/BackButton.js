import React from 'react';
import {View, Text, Image} from 'react-native';

export default function BackButton() {
  return (
    <View>
      <Image
        source={require('../Assets/Images/backicon.png')}
        width={10}
        height={10}
        size={30}></Image>
    </View>
  );
}
