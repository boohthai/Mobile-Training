import React from 'react';
import { StyleSheet, View, Text, TextInput, Pressable} from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { useTogglePasswordVisibility } from '../components/handleViewPassword';
export default function Login ({ navigation }) {
    const [text, onChangeText] = React.useState('');
    const [password, setPassword] = React.useState('');
    // const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    // useTogglePasswordVisibility();
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.hello}> HELLO! </Text>
                <Text style={styles.hello}> WELCOME BACK </Text>
            </View>
            
            <View style = {styles.form}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    placeholder="Email"
                    value={text}
                    keyboardType={'email-address'}
                />
                <TextInput
                        style={styles.input}
                        name="password"
                        placeholder="Password"
                        autoCapitalize="none"
                        secureTextEntry={true}
                        value={password}
                        enablesReturnKeyAutomatically
                        onChangeText={setPassword}
                        />
        
                <Text style = {{textAlign:'center', fontSize: 20, padding: 10}}> Forgot Password </Text>
            </View>
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F2F2F2'
    },
    head: {
        marginHorizontal: 60,
        marginTop: 200,
        justifyContent: 'center',
        
    },
    hello: {
      fontSize: 30,
      padding: 5,
      textAlign: 'center',
      fontWeight: 'bold'
    },

    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    form: {
        marginHorizontal: 30,
        marginTop: 'auto',
        marginBottom: 'auto',
        backgroundColor: 'white'
    },
    inputContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
    }
  });
  