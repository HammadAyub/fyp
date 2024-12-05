import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../theme';

const SellOptionsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What do you want to sell?</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CarDetails')}
      >
        <Text style={styles.buttonText}>Sell your car</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.navigate('BikeDetails')}
      >
        <Text style={styles.buttonText}>Sell your bike</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: theme.fontSizes.extraLarge,
    fontWeight: 'bold',
    marginBottom: theme.spacing.large,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: theme.spacing.large,
    paddingVertical: theme.spacing.medium,
    borderRadius: theme.borderRadius,
    marginBottom: theme.spacing.medium,
    width: 200,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: theme.colors.secondary,
  },
  buttonText: {
    color: theme.colors.buttonText,
    fontSize: theme.fontSizes.large,
    fontWeight: '500',
  },
});

export default SellOptionsScreen;

