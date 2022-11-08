import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { useTogglePasswordVisibility } from '../components/handleViewPassword';
export default function Login({navigation}) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [pw, setPassword] = React.useState('');
  const [hidePwd, setHidePwd] = React.useState(false);
  const pressSignin = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Image source={require('../assets/pattern.png')} style={styles.img} />
      <View style={styles.head}>
        <Text style={styles.hello}> WELCOME </Text>
      </View>

      <View style={[styles.form, styles.shadowProp]}>
        <View style={styles.subform}>
          <TextInput
            style={styles.input}
            onChangeText={setName}
            placeholder="Name"
            value={name}
          />
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            placeholder="Email"
            value={email}
            keyboardType={'email-address'}
          />
          <View style={styles.passwordbox}>
            <TextInput
              style={{flex: 3}}
              placeholder="Enter Password"
              maxLength={20}
              secureTextEntry={hidePwd}
              value
              onChangeText={newPwd => setPassword(newPwd)}></TextInput>
            <TouchableOpacity
              onPress={() => {
                setHidePwd(!hidePwd);
              }}>
              <Icon
                name={hidePwd ? 'eye-slash' : 'eye'}
                color="gray"
                size={23}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.passwordbox}>
            <TextInput
              style={{flex: 3}}
              placeholder="Enter Password"
              maxLength={20}
              onChangeText={newPwd => setPassword(newPwd)}></TextInput>

            <TouchableOpacity
              onPress={() => {
                setHidePwd(!hidePwd);
              }}>
              <Icon
                name={hidePwd ? 'eye-slash' : 'eye'}
                color="gray"
                size={23}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Pressable style={styles.signup}>
          <Text style={{fontSize: 18, textAlign: 'center', color: 'white'}}>
            Sign up
          </Text>
        </Pressable>
        <View style={styles.hadaccount}>
          <Text style={{fontSize: 15, color: '#909090'}}>
            Already have account?
          </Text>
          <Pressable>
            <Text
              style={{fontSize: 15, fontWeight: 'bold'}}
              onPress={pressSignin}>
              Sign in
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  hadaccount: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'space-around',
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
    fontWeight: 'bold',
  },

  input: {
    height: 60,
    marginHorizontal: 20,
    marginTop: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: '#E0E0E0',
    overflow: 'hidden',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  form: {
    marginBottom: 150,
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
    color: '#303030',
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
    color: '#303030',
  },
  img: {
    resizeMode: 'cover',
    marginTop: 80,
    justifyContent: 'center',
  },
  passwordbox: {
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
    alignItems: 'center',
  },
});
