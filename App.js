import { ImageBackground, StyleSheet, Text, View, Pressable} from "react-native";
// import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Boarding from './src/screens/Boarding';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Home from './src/screens/Home';
import Detail from "./src/components/productdetails/detail";
import MyCart from "./src/screens/MyCart"
import { Provider } from 'react-redux';
import { store } from './src/redux/Store';

const Stack = createNativeStackNavigator();

const App = () => (
  <Provider store = {store}>
<NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={SCREEN_NAMES.BOARDING}>
        <Stack.Screen name={SCREEN_NAMES.BOARDING} component={Boarding}  />
        <Stack.Screen name={SCREEN_NAMES.LOGIN} component={Login} />
        <Stack.Screen name={SCREEN_NAMES.SIGNUP} component={Signup}/>
        <Stack.Screen name={SCREEN_NAMES.HOME} component={Home}/>
        <Stack.Screen name={SCREEN_NAMES.DETAIL} component={Detail}/>
        <Stack.Screen name={SCREEN_NAMES.CART} component={MyCart}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
  
);

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
  CART: 'MyCart'
}

export default App;