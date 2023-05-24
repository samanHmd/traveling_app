import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { signup } from '../util/auth';
import { useContext } from 'react';
import { AppContent } from '../store/AppContent';
import jwtDecode from 'jwt-decode';

const SignUpScreen = () => {
  const { storedInfo, setFcn } = useContext(AppContent);
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function handleSignUp() {
    try {
      const response = await signup(name, username, email, password);
      if (response.status == 200) {
        //setFcn.setAuthUsername(username);
        //setFcn.setAuthPass(password);
        //navigation.navigate('Account Confirmation');
        //setFcn.setAuthToken(token);
        let jwtResponse = await response.json();
        setFcn.setAuthToken(jwtResponse);
        console.log("this is TToken "+jwtResponse);
        navigation.navigate('Home');
      }
      if (response.status != 200) {
        alert(response.stauts);
      }
    } catch (error) {
      alert(error);
    }
  }

  const handleBackToLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="userName"
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="confirmPassword"
        secureTextEntry
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleBackToLogin}>
        <Text style={styles.loginButtonText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  signUpButton: {
    backgroundColor: 'blue',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginButton: {
    marginTop: 10,
  },
  loginButtonText: {
    color: 'blue',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  logo: {
    width: '100%',
    height: 360,
    marginRight: 2,
    marginBottom: 10,
  },
});

export default SignUpScreen;
