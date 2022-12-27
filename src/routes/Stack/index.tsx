import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Authentication from '../../screens/Authentication';
import Home from '../../screens/Home';
import Pokemon from '../../screens/Pokemon';

const Stack = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
      <Stack.Screen name="Authentication" component={Authentication} />
    </Stack.Navigator>
  );
};
