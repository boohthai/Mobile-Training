import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ITEM_POPULAR, ITEM_CHAIR} from '../data/Data';

const Item = ({item, onPress}) => (
  <TouchableOpacity
    style={styles.item}
    onPress={() => {
      if (onPress) {
        onPress(item.id, item.img, item.name, item.price, item.rate, item.description, item.quantity);
      }
    }}>
    <View style={styles.imgbox}>
      <Image source={item.img} style={styles.img}></Image>
      <TouchableOpacity style={styles.bag} >
        <Icon name="shopping-bag" size={20}></Icon>
      </TouchableOpacity> 
    </View>
    <Text style={styles.title}>{item.name}</Text>
    <Text style={styles.price}> $ {item.price.toFixed(2)}</Text>
  </TouchableOpacity>
);
export function renderItems(selectedId, onPress) {
  // TODO: common component
  const renderItem = ({item}) => (
    <Item
      item={item}
      onPress={() => onPress(item)}
      title={item.name}
      quantity = {item.quantity}
      price={item.price}
    
    />
  );
  if (selectedId === 1) {
    return (
      // TODO: smart component(state-ful)
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          numColumns={2}
          data={ITEM_POPULAR}
          renderItem={renderItem}
          keyExtractor={item => item.id}></FlatList>
      </View>
    );
  } else if (selectedId === 2) {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          numColumns={2}
          data={ITEM_CHAIR}
          renderItem={renderItem}
          keyExtractor={item => item.id}></FlatList>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'red'
  },
  item: {
    marginTop: 5,
    height: 300,
    width: 200,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 17,
    color: '#909090',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 19,
    marginTop: 5,
  },
  list: {
    textAlign: 'center',
    flex: 1,
  },
  img: {
    resizeMode: 'cover',
    width: 200,
    height: 250,
    padding: 15,
    borderRadius: 10,
  },
  imgbox: {
    height: 250,
  },
  bag: {
    height: 35,
    width: 35,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    zIndex: 0,
    left: 150,
    bottom: 50,
  },
});
