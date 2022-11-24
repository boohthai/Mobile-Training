import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import ImageLoad from '../../assets';
import {
  removeItem,
  incrementQuantity,
  decrementQuantity,
  addToCart,
} from '../../redux/CartSlice';
import AsyncStorage from '@react-native-community/async-storage';

export default function Checkout({navigation}) {
  const [address, onChangeAddress] = React.useState(
    '25 rue Robert Latouche, Nice, 06200, Côte D’azur, France',
  );
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();
  console.log('Hello', cart);

  useEffect(() => {
    const initCart = async () => {
      try {
        const jsonValue = JSON.stringify(cart);
        await AsyncStorage.setItem('CartInfo', jsonValue);
      } catch (e) {
        console.error('error', e);
        // error reading value
      }
    };
    initCart();
  }, [cart]);
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach(item => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return {totalPrice, totalQuantity};
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backbtn}
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name="chevron-left" size={25} style={styles.backicon}></Icon>
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.mycart}> Checkout </Text>
      </View>

      <View style={styles.address}>
        <Text style={styles.addresstext}> Shipping address </Text>
        <Icon name="marker" size={20}></Icon>
      </View>

      <View style={styles.addressinfo}>
        <Text style={styles.name}> Bruno Fernandes</Text>
        <View style={styles.bar}></View>
        <TextInput
          onChangeText={onChangeAddress}
          defaultValue={address}
          style={styles.addressinput}
          multiline={true}></TextInput>
      </View>
      <View style={styles.payment}>
        <Text style={styles.paymenttext}> Payment </Text>
        <Icon name="marker" size={20}></Icon>
      </View>
      <View style={styles.paymentcard}>
       <Image source={ImageLoad.mastercard}></Image>
       <Text style = {styles.account}> **** **** **** 3947</Text>
      </View>
      <View style={styles.payment}>
        <Text style={styles.paymenttext}> Delivery method </Text>
        <Icon name="marker" size={20}></Icon>
      </View>
      <View style={styles.delivery}>
       <Image source={ImageLoad.delivery}></Image>
       <Text style = {styles.deliverytext}> Fast(2-3 days) </Text>
      </View>
      <View style = {styles.summary}>
      <View style={styles.price}>
        <Text style={styles.total}> Order </Text>
        <Text style={styles.money}> $ {getTotal().totalPrice.toFixed(2)}</Text>
      </View>
      <View style={styles.price}>
        <Text style={styles.total}> Delivery fee </Text>
        <Text style={styles.money}> $ 5.00 </Text>
      </View>
      <View style={styles.price}>
        <Text style={styles.total}> Total </Text>
        <Text style={styles.money}> </Text>
      </View>
      </View>
     
      
      <View style={styles.viewcheckout}>
        <TouchableOpacity style={styles.checkout} onPress = {() => navigation.navigate('Success')}>
          <Text style={styles.textcheckout}> Submit order </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
