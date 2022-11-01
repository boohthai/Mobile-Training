import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainter } from 'react-navigation';
import Boarding from '../src/screens/Boarding';

const screens = {
    Home: {
        screen: Boarding
    },
  
}
const HomeStack = createStackNavigator(screens);
export default createAppContainter(HomeStack);