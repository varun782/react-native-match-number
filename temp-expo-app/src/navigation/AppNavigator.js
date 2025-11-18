import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Level1Screen from '../screens/Level1Screen';
import Level2Screen from '../screens/Level2Screen';
import Level3Screen from '../screens/Level3Screen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Level 1" component={Level1Screen} />
      <Stack.Screen name="Level 2" component={Level2Screen} />
      <Stack.Screen name="Level 3" component={Level3Screen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;