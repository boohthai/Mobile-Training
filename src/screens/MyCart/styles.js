import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    bar: {
      width: 300,
      height: 10,
      backgroundColor: 'red',
    },
    header: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 80,
      flexDirection: 'row',
  
      zIndex: 0,
    },
    mycart: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    backicon: {},
    backbtn: {
      position: 'absolute',
      left: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 80,
      height: 45,
      width: 45,
    },
    pannel: {
      justifyContent: 'center',
      height: 50,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 45,
      marginHorizontal: 20,
    },
    productname: {
      fontSize: 20,
      color: '#909090',
    },
    productprice: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    img: {
      height: 120,
      width: 120,
      borderRadius: 20,
    },
    list: {
      marginTop: 20,
      flex: 1,
    },
    boxcode: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    inputcode: {
      fontSize: 17,
      textAlign: 'left',
      paddingLeft: 30,
      backgroundColor: 'white',
      height: 45,
      width: 360,
      borderBottomLeftRadius: 10,
      borderTopLeftRadius: 10,
    },
    entercode: {
      height: 45,
      width: 45,
      backgroundColor: 'black',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconentercode: {
      textAlign: 'center',
      color: 'white',
    },
    price: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 20,
      marginHorizontal: 20,
    },
    total: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#808080',
    },
    money: {
      fontSize: 25,
      fontWeight: 'bold',
    },
    viewcheckout: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 50,
    },
    checkout: {
      backgroundColor: 'black',
      width: 400,
      alignItems: 'center',
      justifyContent: 'center',
      height: 60,
      borderRadius: 10,
    },
    textcheckout: {
      color: 'white',
      fontSize: 25,
    },
    productinfo: {
      justifyContent: 'flex-start',
      marginLeft: 15,
      flex: 1,
      height: 100,
    },
    checknumber: {
      flexDirection: 'row',
      marginTop: 30,
      marginLeft: 10,
      alignItems: 'center',
    },
    number: {
      fontSize: 25,
      marginHorizontal: 10,
    },
    deleteitem: {
      marginLeft: 200,
      bottom: 100,
    },
  });
  export default styles;