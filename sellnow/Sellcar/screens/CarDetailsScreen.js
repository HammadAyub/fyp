import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { cities, colors, years } from '../data/data'; // Assuming you have this data available
import { Picker } from '@react-native-picker/picker';

const CarDetailsScreen = () => {
  const [location, setLocation] = useState('');
  const [carModel, setCarModel] = useState('');
  const [registrationYear, setRegistrationYear] = useState('');
  const [registrationCity, setRegistrationCity] = useState('');
  const [color, setColor] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    console.log({ location, carModel, registrationYear, registrationCity, color, price, description });
    alert('Your car has been listed for sale!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>List Your Car</Text>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Location</Text>
        <Picker
          selectedValue={location}
          style={styles.picker}
          onValueChange={(itemValue) => setLocation(itemValue)}
        >
          <Picker.Item label="Select location" value="" />
          {cities.map((city) => (
            <Picker.Item key={city} label={city} value={city} />
          ))}
        </Picker>

        <Text style={styles.label}>Car Model</Text>
        <TextInput
          style={styles.input}
          value={carModel}
          onChangeText={setCarModel}
          placeholder="Enter car model"
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
    backgroundColor: '#F9F9F9', // Light grey background for a soft, clean look
    padding: 25,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#2C3E50', // Darker color for the title
    textAlign: 'center',
    marginBottom: 25,
  },
  formContainer: {
    backgroundColor: '#FFF',
    padding: 30,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 10, // Shadow for a floating effect on Android
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#34495E', // Darker color for labels to make it more readable
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: '#BDC3C7', // Light border color
    borderWidth: 1.5,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#ECF0F1', // Soft background for input fields
  },
  picker: {
    height: 50,
    borderColor: '#BDC3C7',
    borderWidth: 1.5,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#ECF0F1',
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
    paddingTop: 15,
    backgroundColor: '#ECF0F1',
  },
  button: {
    backgroundColor: '#3498DB', // Blue color for the button
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default CarDetailsScreen;
