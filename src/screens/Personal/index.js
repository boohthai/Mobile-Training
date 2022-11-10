import React, {useEffect} from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import { setLogOutState } from '../../redux/LogInSlice';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Personal({navigation}) {
  const dispatch = useDispatch();

    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings!</Text>
        <Button title="Log out" onPress={() => {
          dispatch(setLogOutState({isLoggedIn: false}));
        }} />
      </View>
    );
  }