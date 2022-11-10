import React from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {SCREEN_NAMES} from '../../../App';
import {setLogInState} from '../../redux/LogInSlice';
import styles from './styles';
import Images from './../../assets';
export default function Login({navigation}) {
  const [email, setEmail] = React.useState('');
  const [pw, setPassword] = React.useState('');
  const [hidePwd, setHidePwd] = React.useState(true);
  const passwordRef = React.useRef();
  const dispatch = useDispatch();
  const loginData = useSelector(state => state.login);

  const pressSignup = () => {
    navigation.navigate(SCREEN_NAMES.SIGNUP);
  };

  const pressLogin = () => {
    dispatch(setLogInState({email, pw}));
  };
  console.log(loginData);
  return (
    <View style={styles.container}>
      <Image source={Image.pattern} style={styles.img} />
      <View style={styles.head}>
        <Text style={styles.hello}> Hello! </Text>
        <Text style={styles.hello}> WELCOME BACK </Text>
      </View>

      <View style={[styles.form, styles.shadowProp]}>
        <View style={styles.subform}>
          <TextInput
            keyboardType="default"
            autoFocus={true}
            style={styles.input}
            onChangeText={text => {
              setEmail(text);
            }}
            placeholder="Email"
            value={email}
            returnKeyType="next"
            onSubmitEditing={() => {
              passwordRef.current.focus();
            }}
            blurOnSubmit={false}
          />

          <View style={styles.passwordbox}>
            <TextInput
              onSubmitEditing={Keyboard.dismiss}
              ref={passwordRef}
              style={{flex: 3}}
              value={pw}
              placeholder="Enter Password"
              maxLength={20}
              secureTextEntry={hidePwd}
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

        <Pressable>
          <Text style={styles.forgot}> Forgot Password </Text>
        </Pressable>
        <TouchableOpacity style={styles.login} onPress={pressLogin}>
          <Text style={{fontSize: 18, textAlign: 'center', color: 'white'}}>
            Log in
          </Text>
        </TouchableOpacity>
        <Pressable style={styles.singup} onPress={pressSignup}>
          <Text style={{fontSize: 18, textAlign: 'center'}}> Sign up </Text>
        </Pressable>
      </View>
    </View>
  );
}
