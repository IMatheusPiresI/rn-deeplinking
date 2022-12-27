import React, {useCallback, useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {useRoute} from '@react-navigation/native';

const Pokemon: React.FC = () => {
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
    <View style={styles.container}>
      <Text style={styles.title}>Pokemon Name: {pokemonName}</Text>
      <Image
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        }}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
  },
  image: {
    width: 250,
    height: 250,
  },
});

export default Pokemon;
