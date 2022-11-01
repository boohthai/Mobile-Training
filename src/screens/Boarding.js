import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Pressable } from 'react-native';

export default function Home ({ navigation }) {
    const image = require('../assets/background.png');
    const pressHandler = () => {
        navigation.navigate('Login');
    }
    return (
        <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.head}> 
            <Text style={styles.title} > MAKE YOUR </Text>
            <Text style={styles.title} > HOME BEAUTIFUL</Text>
          </View>
            <Text style={styles.description}>
            The best simple place where you discover 
            most wonderful furnitures and make your home beautiful
            </Text>
    
          <Pressable style={styles.button} onPress={ pressHandler }>
              <Text style={styles.text}> Get Started </Text>
          </Pressable>
    
        </ImageBackground>
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    head: {
      marginTop: 120,
      marginHorizontal: 25,
    },
    description: {
      marginTop: 24,
      fontSize: 18,
      lineHeight: 24,
      paddingHorizontal: 30,
      color: '#909090',
      letterSpacing: 2
    },
    image: {
      flex: 1,
      width: "100%"
    },
    text: {
      color: "white",
      fontSize: 18,
      textAlign: "center",
      padding: 15
  
    },
    title: {
      color: "black",
      fontSize: 35,
      textAligh: "left",
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 50,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#242424',
      marginTop: 520,
    },
  });
  