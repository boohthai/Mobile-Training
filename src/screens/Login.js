import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Pressable, Image, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SCREEN_NAMES } from '../../App';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { useTogglePasswordVisibility } from '../components/handleViewPassword';

export default function Login ({ navigation }) {
    const [email, setEmail] = React.useState('');
    const [pw, setPassword] = React.useState('');
    const [hidePwd, setHidePwd] = React.useState(true);
    const passwordRef = React.useRef();

    const pressSignup = () => {
        navigation.navigate(SCREEN_NAMES.SIGNUP);
    };
    
    const pressLogin = () => {
        navigation.navigate(SCREEN_NAMES.HOME)
    }
    
    return (
        <View style={styles.container}>
            <Image source={require('../assets/pattern.png')} style={styles.img}/>
            <View style={styles.head}>
                <Text style={styles.hello}> Hello! </Text>
                <Text style={styles.hello}> WELCOME BACK </Text>
            </View>
            
            <View style = {[styles.form, styles.shadowProp]}>
                <View style={styles.subform}>
                    <TextInput
                        keyboardType='default'
                        autoFocus={true}
                        style={styles.input}
                        onChangeText={(text) => {
                            setEmail(text)
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
                            onChangeText={(newPwd)=>setPassword(newPwd)}>
                        </TextInput>
                        <TouchableOpacity
                            onPress={() => {
                            setHidePwd(!hidePwd);}}>
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
                    <Text style={{fontSize: 18, textAlign: 'center',
                    color: 'white'}}> Log in </Text>
                </TouchableOpacity>
                <Pressable style={styles.singup} onPress={pressSignup} >
                    <Text style={{fontSize: 18, textAlign: 'center'}}> Sign up </Text>
                </Pressable>
                
            </View>
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F2F2F2',
    alignItems: 'center',
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
      fontWeight: 'bold'
    },

    input: {
        height: 60,
        marginHorizontal: 20,
        marginTop: 15,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        borderColor: '#E0E0E0',
        overflow: 'hidden'
      },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
    form: {
        marginTop: 60,
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
        color: '#303030'
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
        color: '#303030'
    },
    img: {
        resizeMode : 'cover',
        marginTop: 80,
        justifyContent: 'center'
    },
    passwordbox:{
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
        alignItems:'center'
    }
  });
  