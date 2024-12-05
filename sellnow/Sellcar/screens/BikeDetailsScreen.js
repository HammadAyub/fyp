import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { cities, colors, years } from '../data/data'; // Assuming you have this data available
import { theme } from '../theme'; // Assuming theme has color & spacing variables
import { Picker } from '@react-native-picker/picker'; // Import Picker

const BikeDetailsScreen = () => {
  const [location, setLocation] = useState('');
  const [bikeModel, setBikeModel] = useState('');
  const [registrationYear, setRegistrationYear] = useState('');
  const [registrationCity, setRegistrationCity] = useState('');
  const [color, setColor] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    console.log({ location, bikeModel, registrationYear, registrationCity, color, price, description });
    alert('Your bike has been listed for sale!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>List Your Bike</Text>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Location</Text>
        <Picker
          selectedValue={location || ''}
          style={styles.picker}
          onValueChange={(itemValue) => setLocation(itemValue)}
        >
          <Picker.Item label="Select location" value="" />
          {cities.map((city) => (
            <Picker.Item key={city} label={city} value={city} />
          ))}
        </Picker>

        <Text style={styles.label}>Bike Model</Text>
        <TextInput
          style={styles.input}
          value={bikeModel}
          onChangeText={setBikeModel}
          placeholder="Enter bike model"
        />

        <Text style={styles.label}>Registration Year</Text>
        <Picker
          selectedValue={registrationYear}
          style={styles.picker}
          onValueChange={(itemValue) => setRegistrationYear(itemValue)}
        >
          <Picker.Item label="Select year" value="" />
          {years.map((year) => (
            <Picker.Item key={year} label={year} value={year} />
          ))}
        </Picker>

        <Text style={styles.label}>Registration City</Text>
        <Picker
          selectedValue={registrationCity}
          style={styles.picker}
          onValueChange={(itemValue) => setRegistrationCity(itemValue)}
        >
          <Picker.Item label="Select city" value="" />
          {cities.map((city) => (
            <Picker.Item key={city} label={city} value={city} />
          ))}
        </Picker>

        <Text style={styles.label}>Color</Text>
        <Picker
          selectedValue={color}
          style={styles.picker}
          onValueChange={(itemValue) => setColor(itemValue)}
        >
          <Picker.Item label="Select color" value="" />
          {colors.map((c) => (
            <Picker.Item key={c} label={c} value={c} />
          ))}
        </Picker>

        <Text style={styles.label}>Price (PKR)</Text>
        <TextInput
          style={styles.input}
          value={price}
          onChangeText={setPrice}
          placeholder="Enter price"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={description}
          onChangeText={setDescription}
          placeholder="Enter description"
          multiline
          numberOfLines={4}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>List for Sale</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f7f7f7', // Light background color for a clean look
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5, // For Android shadow
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  picker: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
    paddingTop: 10,
  },
  button: {
    backgroundColor: '#0066cc',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default BikeDetailsScreen;
