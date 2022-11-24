import {View} from 'react-native';
// import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Provider, useSelector} from 'react-redux';
import {store} from './src/redux/Store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StartScreen from './src/screens/StartScreen';
const App = () => {

    return (
      <Provider store={store}>
        <StartScreen/>
      </Provider>
    );
  };

export const SCREEN_NAMES = {
  BOARDING: 'Boarding',
  LOGIN: 'Login',
  SIGNUP: 'Signup',
  HOME: 'Home',
  POPULAR: 'Popular',
  CHAIR: 'Chair',
  TABLE: 'Table',
  ARMCHAIR: 'Armchair',
  BED: 'Bed',
  ITEMSCREEN: 'ItemScreen',
  SAVEDITEM: 'SavedItem',
  NOTIFICATION: 'Notification',
  PERSONAL: 'Personal',
  DETAIL: 'Detail',
  CART: 'MyCart',
  CHECKOUT: 'Checkout',
  SUCCESS: 'Success'
};

export default App;
