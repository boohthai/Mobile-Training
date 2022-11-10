import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import {
  removeItem,
  incrementQuantity,
  decrementQuantity,
  addToCart,
} from '../../redux/CartSlice';
import AsyncStorage from '@react-native-community/async-storage';
function Item({item}) {
  const dispatch = useDispatch();

  return (
    <View>
      <View style={styles.pannel}>
        <Image source={item.image} style={styles.img}></Image>
        <View style={styles.productinfo}>
          <Text style={styles.productname}>{item.name}</Text>
          <Text style={styles.productprice}>$ {item.price.toFixed(2)}</Text>
          <View style={styles.checknumber}>
            <TouchableOpacity
              onPress={() => dispatch(incrementQuantity(item.id))}>
              <Icon name="plus-circle" size={20}></Icon>
            </TouchableOpacity>

            <Text style={styles.number}> {item.quantity}</Text>
            <TouchableOpacity
              onPress={() => dispatch(decrementQuantity(item.id))}>
              <Icon name="minus-circle" size={20}></Icon>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.deleteitem}
            onPress={() => dispatch(removeItem(item.id))}>
            <Icon name="times-circle" size={20}></Icon>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default function MyCart({navigation}) {
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
  const renderItem = ({item}) => (
    <Item
      item={item}
      title={item.name}
      source={item.img}
      price={item.price}
      quantity={item.quantity}
    />
  );
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
        <Text style={styles.mycart}> My cart</Text>
      </View>
      <View style={styles.list}>
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>

      <View style={styles.boxcode}>
        <TextInput
          placeholder="Enter your promotion code"
          style={styles.inputcode}></TextInput>
        <TouchableOpacity style={styles.entercode}>
          <Icon
            name="chevron-right"
            style={styles.iconentercode}
            size={17}></Icon>
        </TouchableOpacity>
      </View>
      <View style={styles.price}>
        <Text style={styles.total}> Total:</Text>
        <Text style={styles.money}> $ {getTotal().totalPrice.toFixed(2)}</Text>
      </View>
      <View style={styles.viewcheckout}>
        <TouchableOpacity style={styles.checkout}>
          <Text style={styles.textcheckout}> Check out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

