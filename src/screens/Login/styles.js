import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F2F2F2',
    alignItems: 'center',
    },
    head: {
        marginHorizontal: 60,
        marginTop: 10,
        justifyContent: 'center',
    },
    hello: {
      fontSize: 30,
      padding: 5,
      textAlign: 'center',
      fontWeight: 'bold'
    },

    input: {
        height: 60,
        marginHorizontal: 20,
        marginTop: 15,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        borderColor: '#E0E0E0',
        overflow: 'hidden'
      },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
    form: {
        marginTop: 60,
        backgroundColor: 'white',
        padding: 15,
        width: '90%',
    },
    subform: {
        marginTop: 10,
    },
    inputContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    forgot: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 40,
        color: '#303030'
    },
    login: {
        borderRadius: 8,
        backgroundColor: '#242424',
        marginHorizontal: 20,
        padding: 20,
        marginTop: 20,
    },
    singup: {
        padding: 10,
        marginTop: 20,
        color: '#303030'
    },
    img: {
        resizeMode : 'cover',
        marginTop: 80,
        justifyContent: 'center'
    },
    passwordbox:{
        display: 'flex',
        flexDirection: 'row',
        height: 60,
        marginHorizontal: 20,
        marginTop: 15,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        borderColor: '#E0E0E0',
        justifyContent: 'space-between',
        alignItems:'center'
    }
  });
export default styles;