/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import App from './App';
import {UserContextProvider} from './context/authContext';
import linking from './routes/linking';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Index = () => {
  return (
    <UserContextProvider>
      <SafeAreaProvider>
        <NavigationContainer linking={linking}>
          <App />
        </NavigationContainer>
      </SafeAreaProvider>
    </UserContextProvider>
  );
};

export default Index;
