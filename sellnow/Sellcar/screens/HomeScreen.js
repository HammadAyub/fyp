import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../theme';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to SellNow</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SellOptions')}
      >
        <Text style={styles.buttonText}>Sell Now</Text>
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
  },
  buttonText: {
    color: theme.colors.buttonText,
    fontSize: theme.fontSizes.large,
    fontWeight: '500',
  },
});

export default HomeScreen;
