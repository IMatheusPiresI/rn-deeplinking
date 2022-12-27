/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import App from './App';
import {UserContextProvider} from './context/authContext';
import linking from './routes/linking';

const Index = () => {
  return (
    <UserContextProvider>
      <NavigationContainer linking={linking}>
        <App />
      </NavigationContainer>
    </UserContextProvider>
  );
};

export default Index;
