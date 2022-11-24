import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import ImageLoad from '../../assets';

export default function Success({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style= {styles.textsuccess}> SUCCESS! </Text>
        <Image source={ImageLoad.success}></Image>
        <Icon name ="check-circle" color="green" size = {50} style = {styles.icon}> </Icon>
        <Text style = {styles.description}>
          Your order will be delivered soon.
        </Text>
        <Text style = {styles.description}> Thank you for choosing our app!</Text>
      </View>
      <View style={styles.viewcheckout}>
      <TouchableOpacity
          style={styles.checkout}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.textcheckout}> Track your orders </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.checkout}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.textcheckout}> Back to home </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
