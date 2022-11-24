import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
  textsuccess:{
    fontWeight: '400',
    fontSize: 40,
    marginBottom: 20,
  },
  checkout: {
    backgroundColor: 'black',
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    borderRadius: 10,
    marginVertical: 5,
  },
  viewcheckout:{
    flex: 1,
    marginBottom: 100,
    justifyContent: 'flex-end',
    
 },
  textcheckout: {
    color: 'white',
    fontSize: 20,
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

  address: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginTop: 30,
  },
  addresstext: {
    fontSize: 20,
    color: '#909090',
    fontWeight: 'bold',
  },
  addressinfo: {
    height: 150,
    marginHorizontal: 20,
    color: 'white',
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  bar: {
    height: 2,
    width: 350,
    backgroundColor: '#E0E0E0',
  },
  addressinput: {
    fontSize: 18,

    color: '#909090',
    marginBottom: 20,
  },
  description:{
    justifyContent: 'center',
    fontSize: 20,
    marginHorizontal: 30,
    textAlign: 'center',
    color: '#909090',
  },
  deliverytext: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    
  },
  summary: {
    backgroundColor: 'white',
    marginHorizontal: 30,
    marginTop: 20,
    borderRadius: 10,
    paddingVertical: 30,
  },
  icon: {
    marginBottom:40
  }
});
export default styles;
