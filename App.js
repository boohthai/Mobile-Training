import { ImageBackground, StyleSheet, Text, View, Pressable} from "react-native";
// import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Boarding from './src/screens/Boarding';
import Login from './src/screens/Login';
const Stack = createNativeStackNavigator();
const App = () => (
  <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
        <Stack.Screen name="Home" component={Boarding}  />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
);

export default App;