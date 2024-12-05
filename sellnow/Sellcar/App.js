import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SellOptionsScreen from './screens/SellOptionsScreen';
import CarDetailsScreen from './screens/CarDetailsScreen';
import BikeDetailsScreen from './screens/BikeDetailsScreen';
import { theme } from './theme';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: theme.colors.buttonText,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: theme.fontSizes.large,
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'SellNow' }} />
        <Stack.Screen name="SellOptions" component={SellOptionsScreen} options={{ title: 'Sell Your Vehicle' }} />
        <Stack.Screen name="CarDetails" component={CarDetailsScreen} options={{ title: 'Sell Your Car' }} />
        <Stack.Screen name="BikeDetails" component={BikeDetailsScreen} options={{ title: 'Sell Your Bike' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;