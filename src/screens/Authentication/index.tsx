import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useUserContext} from '../../context/authContext';

const Authentication: React.FC = () => {
  const {setUser} = useUserContext();

  const seMytUser = () => {
    setUser({
      name: 'sadada',
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Authentication Screen</Text>
      <View style={styles.containerButton}>
        <Button title="Login" onPress={seMytUser} />
      </View>
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
  containerButton: {
    marginTop: 20,
  },
});

export default Authentication;
