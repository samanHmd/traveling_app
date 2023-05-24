import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import PackageCardGroup from '../Components/PackageCardGroup';
import LoginScreen from '../Components/LoginScreen';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { AppContent } from '../store/AppContent';

const predefinedPackages = require('../data/predefined_packages.json');
const HomeScreen = () => {
  const navigation=useNavigation();
  const {storedInfo, setFcn}=useContext(AppContent)
  const [selectedButton, setSelectedButton] = useState('Home');
  const [packages, setPackages] = useState(predefinedPackages);
  const [isLogin, setIsLogin]=useState(false);

  console.log("this is ttoken "+JSON.stringify(storedInfo.token));

  const renderContent = () => {
    if (selectedButton === 'Home') {
      return <PackageCardGroup data={packages} style={styles.item} />;
    } else if (selectedButton === 'New Package') {
      navigation.navigate('Flight Booking');
    } else if (selectedButton === 'About Us') {
      return <Text style={styles.item}>About Us Content</Text>;
    } else if (selectedButton === 'Login') {
      return <LoginScreen/>;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setSelectedButton('Home')}
          >
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setSelectedButton('New Package')}
          >
            <Text style={styles.buttonText}>CustomPackage</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setSelectedButton('About Us')}
          >
            <Text style={styles.buttonText}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setSelectedButton('Login')}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>{renderContent()}</View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingTop: 20,
    width: '85%',
  },
  logo: {
    width: '15%',
    height: 50,
    marginRight: 2,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 6,
  },
  buttonText: {
    opacity: 1,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000',
  },
  item: {
    paddingTop:20,
  }
};

export default HomeScreen;

/*import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({navigation}){
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Agent')}>
        <Text style={styles.buttonText}>Agent</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>alert('Not Active, Reserved for the main Project')}>
        <Text style={styles.buttonText}>Customer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginHorizontal: 10,
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

*/
