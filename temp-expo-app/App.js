import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';

// Expo Router already provides a NavigationContainer. Export the navigator
// directly so we don't create a nested NavigationContainer which causes
// runtime errors when running inside the Expo Router layout.
export default function App() {
  return <AppNavigator />;
}