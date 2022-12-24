/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useState} from 'react';

import {NavigationContainer, useRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import linking from '../../linking';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer linking={linking}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Pokemon" component={Pokemon} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Home Screen</Text>
    </View>
  );
};

const Pokemon = () => {
  const route = useRoute();
  const [pokemonName, setPokemonName] = useState<string>('');

  const {id} = route.params as {id: string};

  const getPokomeonName = useCallback(async () => {
    const result: string = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    )
      .then(res => res.json())
      .then(res => res.name);

    setPokemonName(result);
  }, [id]);

  useEffect(() => {
    getPokomeonName();
  }, [getPokomeonName]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Profile Screen {pokemonName}</Text>
    </View>
  );
};
