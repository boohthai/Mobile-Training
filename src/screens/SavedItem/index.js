import React, {useEffect}  from 'react';
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
import { removeItem } from '../../redux/FavSlice';
import AsyncStorage from '@react-native-community/async-storage';
function Item({item}) {
  const dispatch = useDispatch();

  return (
    <View> 
      <View style={styles.pannel}>
        <Image source={item.image} style={styles.img}></Image>
        <View style={styles.productinfo}>
          <Text style={styles.productname}>{item.name}</Text>
          <Text style={styles.productprice}>$ {item.price.toFixed(2)}</Text>
          <TouchableOpacity style={styles.deleteitem} onPress = {()=>
          dispatch(removeItem(item.id))}>
            <Icon name="times-circle" size={20}></Icon>
          </TouchableOpacity>
            <TouchableOpacity style = {styles.shoppingicon}>
              <Icon name = "shopping-bag" size={20} style={{ textAlign: 'center'}}> </Icon>
            </TouchableOpacity>
        </View>
       
      </View>

    </View>
   
    
  );
}
export default function SavedItem({navigation}) {
  const favlist = useSelector(state => state.favlist.favorite);
  useEffect(() => {
    const initList = async () => {
      try {
        const jsonValue = JSON.stringify(favlist);
        await AsyncStorage.setItem('listinfo', jsonValue);
      } catch (e) {
        console.error('error', e);
        // error reading value
      }
    };
    initList();
  }, [favlist]);
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
        <Text style={styles.mycart}> Favorites </Text>
      </View>
      <View style={styles.list}>
        <FlatList
          data={favlist}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      
      <View style = {styles.bottom}>

      <View style={styles.viewcheckout}>
        <TouchableOpacity style={styles.checkout}>
          <Text style={styles.textcheckout}> Add all to my cart</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 20,
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

  deleteitem: {
    marginLeft: 230,
    bottom: 40
  },
  shoppingicon: {
      height: 40,
      width : 40,
      backgroundColor: '#E0E0E0',
      justifyContent:'center',
      alignItems: 'center',
      borderRadius: 10,
     marginLeft: 210
  }
});
