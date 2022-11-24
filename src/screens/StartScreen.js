import {NavigationContainer} from '@react-navigation/native';
import {SCREEN_NAMES} from '../../App';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {setLogInState} from '../redux/LogInSlice';
import Boarding from './Boarding/index';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Personal from './Personal';
import Detail from '../components/Detail';
import MyCart from './MyCart';
import Checkout from './Checkout';
import Success from './Success';
import {addToCart} from '../redux/CartSlice';
import { addToList } from '../redux/FavSlice';

export default StartScreen = () => {
  const dispatch = useDispatch();
  const loginData = useSelector(state => state.login);
  const Stack = createNativeStackNavigator();
  const cart = useSelector(state => state.cart.cart);
  useEffect(() => {
    const loadInfoLogin = async () => {
      try {
        // await AsyncStorage.clear();
        let info = await AsyncStorage.getItem('loginInfo');
        info = JSON.parse(info);
        console.log('loadInfoLogin', info, info.isLoggedIn);
        if (info && info.isLoggedIn) {
          console.log('dispatch');
          dispatch(setLogInState(info));
        }
      } catch (e) {
        console.error('error', e);
        // error reading value
      }
    };
    loadInfoLogin();
  }, []);

  useEffect(() => {
    const loadCart = async () => {
      try {
        let infoCart = await AsyncStorage.getItem('CartInfo');
        infoCart = JSON.parse(infoCart);
        infoCart.forEach(item => {
          dispatch(addToCart(item));
        });
      } catch (e) {
        console.error('error', e);
      }
    };
    loadCart();
  }, []);
  useEffect(() => {
    const loadFavList = async () => {
      try {
        let infoList = await AsyncStorage.getItem('listinfo');
        infoList = JSON.parse(infoList);
        infoList.forEach(item => {
          dispatch(addToList(item));
        });
      } catch (e) {
        console.error('error', e);
      }
    };
    loadFavList();
  }, []);
  useEffect(() => {
    const initCache = async () => {
      try {
        const jsonValue = JSON.stringify(loginData);
        await AsyncStorage.setItem('loginInfo', jsonValue);
      } catch (e) {
        console.error('error', e);
      }
    };
    initCache();
  }, [loginData]);

  const createAuthenStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={SCREEN_NAMES.BOARDING}>
          <Stack.Screen name={SCREEN_NAMES.BOARDING} component={Boarding} />
          <Stack.Screen name={SCREEN_NAMES.LOGIN} component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  const createMainStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={SCREEN_NAMES.HOME}>
          <Stack.Screen name={SCREEN_NAMES.HOME} component={Home} />
          <Stack.Screen name={SCREEN_NAMES.DETAIL} component={Detail} />
          <Stack.Screen name={SCREEN_NAMES.CART} component={MyCart} />
          <Stack.Screen name={SCREEN_NAMES.PERSONAL} component={Personal} />
          <Stack.Screen name={SCREEN_NAMES.CHECKOUT} component={Checkout}/>
          <Stack.Screen name={SCREEN_NAMES.SUCCESS} component={Success}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  if (!!loginData.isLoggedIn) {
    return createMainStack();
  }
  return createAuthenStack();
};
