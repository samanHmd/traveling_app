import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Modal } from 'native-base';


const FlightBookingScreen = () => {
  const [departureDate, setDepartureDate] = useState('');
  const [departureLocation, setDepartureLocation] = useState('');
  const [destination, setDestination] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted');
    console.log('Departure Day:', departureDate);
    console.log('Departure Location:', departureLocation);
    console.log('Destination:', destination);
  };

  return (
    <View>
      <Text style={styles.label}>Flight Booking Form</Text>

      <Text style={styles.fieldLabel}>Departure Day:</Text>
      <TextInput
        style={styles.input}
        value={departureDate}
        onChangeText={(text) => setDepartureDate(text)}
        placeholder="Select departure date"
      />

      <Text style={styles.fieldLabel}>Departure Location:</Text>
      <TextInput
        style={styles.input}
        value={departureLocation}
        onChangeText={(text) => setDepartureLocation(text)}
        placeholder="Enter departure location"
      />

      <Text style={styles.fieldLabel}>Destination:</Text>
      <TextInput
        style={styles.input}
        value={destination}
        onChangeText={(text) => setDestination(text)}
        placeholder="Enter destination"
      />

      <Example />
    </View>
  );
};

const styles = {
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  fieldLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
};

export default FlightBookingScreen;


const Example = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Center>
      <Button onPress={() => setShowModal(true)}>Button</Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Contact Us</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

