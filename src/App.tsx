import React, {useEffect, useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {Linking} from 'react-native';
import {StackRoutes} from './routes/Stack';
import {useUserContext} from './context/authContext';

const App = () => {
  const navigation = useNavigation();
  const {user} = useUserContext();
  const [linking, setLinking] = useState<string | null>(null);

  const getInitialURL = async () => {
    const url = await Linking.getInitialURL();

    setLinking(url);
  };

  useEffect(() => {
    getInitialURL();

    if (user) {
      if (linking) {
        Linking.openURL(linking);
        return;
      }
      navigation.navigate('Home');
      return;
    }

    navigation.navigate('Authentication');
  }, [linking, navigation, user]);

  return <StackRoutes />;
};

export default App;
