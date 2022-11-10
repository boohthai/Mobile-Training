import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import {SCREEN_NAMES} from '../../../App';
import styles from './styles';
import Images from './../../assets';
import {useSelector} from 'react-redux';
export default function Boarding({navigation}) {
  const pressHandler = () => {
    navigation.navigate(SCREEN_NAMES.LOGIN);
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Images.background}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.head}>
          <Text style={styles.title}> MAKE YOUR </Text>
          <Text style={styles.title}> HOME BEAUTIFUL</Text>
          <Text style={styles.description}>
            The best simple place where you discover most wonderful furnitures
            and make your home beautiful
          </Text>
        </View>

        <Pressable style={styles.button} onPress={pressHandler}>
          <Text style={styles.text}> Get Started </Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}
