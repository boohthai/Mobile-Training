import React  from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { removeItem,incrementQuantity,decrementQuantity} from '../redux/CartSlice';

function Item({item}) {
  const dispatch = useDispatch();

  return (
    <View> 
      <View style={styles.pannel}>
        <Image source={item.image} style={styles.img}></Image>
        <View style={styles.productinfo}>
          <Text style={styles.productname}>{item.name}</Text>
          <Text style={styles.productprice}>$ {item.price.toFixed(2)}</Text>
          <View style={styles.checknumber}>
          <TouchableOpacity onPress={()=> dispatch(incrementQuantity(item.id))}>
          <Icon name="plus-circle" size={20}></Icon>
          </TouchableOpacity>
            
            <Text style={styles.number}> {item.quantity}</Text>
            <TouchableOpacity onPress={()=> dispatch(decrementQuantity(item.id))}>
            <Icon name="minus-circle" size={20}></Icon>
            </TouchableOpacity>
          
          </View>
          <TouchableOpacity style={styles.deleteitem} onPress = {()=>
          dispatch(removeItem(item.id))}>
            <Icon name="times-circle" size={20}></Icon>
          </TouchableOpacity>
        </View>
      </View>

    </View>
   
    
  );
}
export default function MyCart({navigation}) {
  const cart = useSelector(state => state.cart);
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return {totalPrice, totalQuantity}
  }
  const renderItem = ({item}) => (
    <Item item={item} title={item.name} source={item.img} price={item.price} quantity = {item.quantity} />
  );
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backbtn}
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name="chevron-left" size={25} style={styles.backicon}></Icon>
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.mycart}> My cart</Text>
      </View>
      <View style={styles.list}>
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>

      <View style={styles.boxcode}>
        <TextInput
          placeholder="Enter your promotion code"
          style={styles.inputcode}></TextInput>
        <TouchableOpacity style={styles.entercode}>
          <Icon
            name="chevron-right"
            style={styles.iconentercode}
            size={17}></Icon>
        </TouchableOpacity>
      </View>
      <View style={styles.price}>
        <Text style={styles.total}> Total:</Text>
        <Text style={styles.money}> $ {getTotal().totalPrice.toFixed(2)}</Text>
      </View>
      <View style={styles.viewcheckout}>
        <TouchableOpacity style={styles.checkout}>
          <Text style={styles.textcheckout}> Check out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  bar: {
    width: 300,
    height: 10,
    backgroundColor: 'red'
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
