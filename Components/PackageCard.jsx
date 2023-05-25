import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation, } from '@react-navigation/native';
import { useContext, useState } from 'react';
import { AppContent } from '../store/AppContent';

export default function PackageCard({ item }) {
  const navigation = useNavigation();
  const { storedInfo, setFcn } = useContext(AppContent);
  const [isLogin, setIsLogin]=useState(false);

  function pressHandler() {
    if (!isLogin){
      alert("Please Login First")
    }
  }

  return (
    <TouchableOpacity style={styles.card}>
      <Image
        source={{ uri: require('../assets/icon.png') }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.textBold}>
          {item.destinationCountry + ', ' + item.destinationCity}
        </Text>
        <Text style={styles.textNotBold}>
          {item.numberOfDays + ' Days, ' + item.numberOfNights + ' Nights'}
        </Text>
        <Text style={styles.textBold}>{'Hotel ' + item.hotelName}</Text>
        <Text style={styles.textNotBold}>{item.price + ' $'}</Text>
        <Text style={styles.textNotBold}>
          {'Activities: ' + item.activities}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => pressHandler(item)}
        >
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = {
  card: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    margin: 8,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '40%',
    height: 120,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 6,
    alignItems: 'center',
    width: '60%',
  },
  textBold: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  textNotBold: {
    fontSize: 10,
    marginBottom: 4,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 8,
  },
};
