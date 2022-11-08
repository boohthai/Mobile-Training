import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    head: {
      marginHorizontal: 25,
      marginTop: 100
    },
    description: {
      marginTop: 24,
      fontSize: 18,
      lineHeight: 24,
      paddingHorizontal: 30,
      color: '#909090',
      letterSpacing: 1
    },
    image: {
      flex: 1,
      justifyContent: 'space-between',
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
      marginHorizontal: 20
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 50,
      borderRadius: 4,
      backgroundColor: '#242424',
      marginBottom: 100,
    },
  });

  export default styles;