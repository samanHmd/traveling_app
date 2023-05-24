import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useState } from 'react';

const LoginScreen = () => {
  const [isCustomer, setIsCustomer] = useState(true);
  const navigation = useNavigation();
  const handleLogin = () => {
    
  };

  const handleSignUp = () => {
    navigation.navigate('Sign Up');
  };

  const handleAgentLogin = () => {
    setIsCustomer(!isCustomer);
  };

  return (
    <View>
      <View style={styles.container}>
        {isCustomer && <Text style={styles.simpleText}>Login as a customer</Text>}
        {!isCustomer && <Text style={styles.simpleText}>Login as an agent</Text>}
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
         {isCustomer && <Text style={styles.signUpText}>Don't have an account? Sign up</Text>}
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpButton} onPress={handleAgentLogin}>
          {isCustomer && <Text style={styles.signUpText}>Are you an agent? Login</Text>}
          {!isCustomer && <Text style={styles.signUpText}>Are you a customer? Login</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 1,
    marginTop: 100,
  },
  title: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '60%',
    height: 25,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 10,
  },
  loginButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 1,
    marginTop: 5,
  },
  buttonText: {
    color: '',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signUpButton: {
    marginTop: 5,
    textAlign: 'center',
  },
  signUpText: {
    color: '#000000',
    fontSize: 10,
    textDecorationLine: 'underline',
    color: 'blue',
  },
  simpleText: {
    color: '#000000',
    fontSize: 12,
    marginBottom: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LoginScreen;
