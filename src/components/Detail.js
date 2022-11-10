import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../redux/CartSlice';
import { addToList } from '../redux/FavSlice';
// TODO: screens
export default function Detail({route, navigation}) {
  const goBack = () => {
    navigation.goBack();
  };
  let {id, image, name, price, rate, description, quantity} = route.params;
  // Local State => Global State
  const cart = useSelector((state) => state.cart.cart)
  const [numProduct, setNumProduct] = React.useState(1);
  const [seleted, setSelected] = React.useState(true);
  const numberCartRef = React.useRef(1);

  const increase = () => {
    let count = numberCartRef.current;
    count += 1;
    numberCartRef.current = count;
    setNumProduct(count);
  };

  const decrease = () => {
    let count = numberCartRef.current;
    count -= 1;
    numberCartRef.current = count;
    setNumProduct(count);
  };
  const dispatch = useDispatch();
  return (
    
    <View style={styles.container}>
    
        <TouchableOpacity
          style={{position: 'absolute', zIndex: 1}}
          onPress={goBack}>
          <View style={styles.backicon}>
            <Icon name={'chevron-left'} size={15}></Icon>
          </View>
        </TouchableOpacity>

        <View style={styles.cover}>
          <View style={styles.pannel}>
            <TouchableOpacity>
              <View style={styles.coloricon}>
                <Icon name={'circle'} size={30} color={'white'}></Icon>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.coloricon}>
                <Icon name={'circle'} size={30} color="#B4916C"></Icon>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.coloricon}>
                <Icon name={'circle'} size={30}></Icon>
              </View>
            </TouchableOpacity>
          </View>
          <Image style={styles.image} source={image}></Image>
        </View>
        <View style={styles.group}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.price}>
            <Text style={{fontSize: 40, fontWeight: 'bold'}}>$ {price.toFixed(2)}</Text>
            <View style={styles.order}>
              <TouchableOpacity
                onPress={() => {
                  increase();
                }}>
                <Icon name={'plus-circle'} size={25}></Icon>
              </TouchableOpacity>
              <Text style={{fontSize: 30, marginHorizontal: 20}}>
                {numProduct}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  decrease();
                }}>
                <Icon name={'minus-circle'} size={25}></Icon>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.rate}>
            <Icon name={'star'} color={'#F2C94C'} size={20}></Icon>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}> {rate} </Text>
            <TouchableOpacity>
              <Text style={{fontSize: 15, paddingLeft: 50, color: 'gray'}}>
                50 Reviews
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.text}>{description}</Text>
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.bookmarkicon} onPress = {()=>{
            dispatch(
              addToList({id, name, image, price})
            );
            setSelected(!seleted)
          }}>
            <Icon name={'bookmark'} size={30} color={seleted? 'gray': 'green'}></Icon>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.add}
            onPress={() =>{
              dispatch(
                addToCart({
                  id,
                  name,
                  image,
                  price,
                  quantity: numberCartRef.current,
                })
              ); navigation.navigate('MyCart');
              console.log(cart);
            }
              
            }>
            <Text style={{color: 'white', fontSize: 20}}> Add to cart</Text>
          </TouchableOpacity>
        </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  add: {
    height: 56,
    width: 300,
    backgroundColor: 'black',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  text: {
    fontSize: 18,
    paddingHorizontal: 20,
    color: '#909090',
    paddingTop: 10,
    flex: 1,
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 25,
  },
  group: {
    marginTop: 20,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  price: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  order: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cover: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    marginLeft: -32,
    borderBottomLeftRadius: 90,
    flex: 1,
    zIndex: -1,
    height: 530,
  },
  backicon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 45,
    width: 45,
    borderRadius: 10,
    left: 20,
    top: 50,
    zIndex: 0,
  },
  coloricon: {
    backgroundColor: '#F5F5F5',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    marginVertical: 5,
  },
  pannel: {
    height: 190,
    padding: 5,
    marginLeft: 20,
    borderRadius: 30,
    backgroundColor: 'white',
    zIndex: 0,
    justifyContent: 'space-between',
  },
  bookmarkicon: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
  },
});
