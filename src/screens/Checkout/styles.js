import {StyleSheet} from 'react-native';
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

  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 20,
  },
  total: {
    fontSize: 20,
    color: '#808080',
  },
  money: {
    fontSize: 20,
  },
  viewcheckout: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    flex: 1
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
  payment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginTop: 30,
  },
  paymenttext: {
    fontSize: 20,
    color: '#909090',
  },
  paymentcard: {
    marginTop: 10,
    height: 65,
    marginHorizontal: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  account: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  delivery: {
    marginTop: 10,
    height: 65,
    marginHorizontal: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingLeft: 30,
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
  }
});
export default styles;
