import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList} from 'react-native';
import {renderItems} from '../../components/RenderItems';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {PANNEL} from '../../data/Data';
import {useSelector} from 'react-redux'
import styles from './styles';
// TODO: dump component(state-less)
function PannelItem({item, onPress, backgroundColor, color, textColor}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.pannel}>
      <View style={[styles.covericon, backgroundColor]}>
        <Icon name={item.icon} style={[styles.item, color]} size={20} />
      </View>
      <Text style={[styles.text, {color: textColor}]}>{item.title}</Text>
    </TouchableOpacity>
  );
}

export default function ItemScreen({navigation}) {
  const [selectedId, setSelectedId] = useState(1);
  const savedScreen = () => {
    return renderItems(selectedId, data => {
      navigation.navigate('Detail', {
        id: data.id,
        image: data.img,
        name: data.name,
        price: data.price,
        rate: data.rate,
        description: data.description,
        quantity: data.quantity,
      });
    });
  };

  const renderPannelItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? 'black' : '#F5F5F5';
    const color = item.id === selectedId ? 'white' : 'gray';
    const textColor = item.id === selectedId ? 'black' : 'gray';
    return (
      <PannelItem
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{backgroundColor}}
        color={{color}}
        textColor={textColor}
      />
    );
  };
  const cart = useSelector(state => state.cart.cart);
  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach(item => {
      total += item.quantity;
    });
    return total;
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name={'search'} size={20}></Icon>
        <View style={styles.text}>
          <Text style={{fontSize: 14, color: '#909090'}}> MAKE HOME </Text>
          <Text style={{fontSize: 18, color: '#909090', fontWeight: 'bold'}}>
            BEAUTIFUL
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('MyCart')}>
          <Icon name="shopping-cart" size={20} style ={styles.shoppingicon}>
          </Icon>
          <View style = {styles.producborder}>
          <Text style = {styles.numproduct}> {getTotalQuantity()} </Text>
          </View>
        
        </TouchableOpacity>
      </View>

      <View style={styles.pannel}>
        <FlatList
          horizontal={true}
          data={PANNEL}
          renderItem={renderPannelItem}
          keyExtractor={item => item.id}
        />
      </View>
      {savedScreen()}
    </View>
  );
}
