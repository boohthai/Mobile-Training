import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { renderItems } from '../components/itemtab/RenderItems';
import Icon from 'react-native-vector-icons/FontAwesome5';;
import {PANNEL} from '../data/Data'

// TODO: dump component(state-less)
function PannelItem ({ item, onPress, backgroundColor, color, textColor }) {
  return (
    <TouchableOpacity onPress={onPress} style = {styles.pannel} >
      <View
      style = {[styles.covericon, backgroundColor]}>
          <Icon name = {item.icon} style={[styles.item, color]} size={20} 
      />
      </View>
    <Text style={[styles.text, {color : textColor}]}>{item.title}</Text>
  </TouchableOpacity>
  );
}


export default function ItemScreen({navigation}) {
  const [selectedId, setSelectedId] = useState(1);
  const savedScreen = ()=> {
    return renderItems(selectedId, (data) => {
      navigation.navigate('Detail', {
        id: data.id,
        image: data.img,
        name: data.name,
        price: data.price,
        rate: data.rate,
        description: data.description,
        quantity: data.quantity
      });
    });
  }

  const renderPannelItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "black" : "#F5F5F5";
    const color = item.id === selectedId? 'white' : 'gray';
    const textColor = item.id === selectedId? 'black' : 'gray';
    return (
      <PannelItem 
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        color ={{ color }}
        textColor={textColor}
      />
    );
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name={'search'} size={20}></Icon>
        <View style={styles.text}>
          <Text style={{fontSize: 14, color: '#909090',}}> MAKE HOME </Text>
          <Text style={{fontSize: 18, color: '#909090', fontWeight: 'bold'}}>
            BEAUTIFUL
          </Text>
        </View>
        <Icon name='shopping-cart' size={20}></Icon>
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    marginHorizontal: 25,
    marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    flexDirection: 'column',
    alignItems: 'center',
    padding:3,
  
  },
  pannel: {
    height:100,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',

  },
  item: {
    padding: 20,
    marginHorizontal: 12,
    height: 60,
    width: 60,
    textAlign: 'center',
  },

  covericon:{
    borderRadius: 20,
    width: 65,
    height: 65,
    alignItems: 'center',
    marginHorizontal: 10,
    justifyContent: 'center',
    textAlign:'center'
  }
});
