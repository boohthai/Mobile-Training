import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Button,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconMet from 'react-native-vector-icons/Ionicons'
import {SCREEN_NAMES} from '../../App';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ItemScreen from './ItemScreen';
import SavedItem from './SavedItem';
import Notification from './Notification';
import Personal from './Personal'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


const TabBottom = createBottomTabNavigator();

export default function Home({navigation}) {
  return (
    <TabBottom.Navigator
      screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <TabBottom.Screen
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon name="home" size={20} color={focused ? 'black' : 'gray'} />
          ),
        }}
        name= {SCREEN_NAMES.ITEMSCREEN}
        component={ItemScreen}
      />
      <TabBottom.Screen
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              name="bookmark"
              size={20}
              color={focused ? 'black' : 'gray'}
            />
          ),
        }}
        name={SCREEN_NAMES.SAVEDITEM}
        component={SavedItem}
      />
      <TabBottom.Screen
        options={{
          tabBarIcon: ({color, focused}) => (
            <IconMet
              name="ios-notifications-outline"
              size={20}
              color={focused ? 'black' : 'gray'}
            />
          ),
        }}
        name={SCREEN_NAMES.NOTIFICATION}
        component={Notification}
      />
      <TabBottom.Screen
        options={{
          tabBarIcon: ({color, focused}) => (
            <IconMet
              name="ios-person-outline"
              size={20}
              color={focused ? 'black' : 'gray'}
            />
          ),
        }}
        name={SCREEN_NAMES.PERSONAL}
        component={Personal}
      />
    </TabBottom.Navigator>
  );
}
