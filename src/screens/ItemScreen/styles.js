import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    header: {
      marginHorizontal: 25,
      marginTop: 100,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    text: {
      flexDirection: 'column',
      alignItems: 'center',
      padding: 3,
    },
    pannel: {
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    item: {
      padding: 20,
      marginHorizontal: 12,
      height: 60,
      width: 60,
      textAlign: 'center',
    },
  
    covericon: {
      borderRadius: 20,
      width: 65,
      height: 65,
      alignItems: 'center',
      marginHorizontal: 10,
      justifyContent: 'center',
      textAlign: 'center',
    },
    numproduct: {
      fontSize: 15,
      color:'white',
      fontWeight: 'bold',
    
    },
    shoppingicon: {
      zIndex: -1
    },
    producborder:{
      backgroundColor: 'gray',
      height: 20,
      width: 20,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      bottom: 30,
      left: 12,
      zIndex: -1
    }
  });
  export default styles;