import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';

import {useNavigation} from '@react-navigation/native';
import {Linking} from 'react-native';
import {useUserContext} from './context/authContext';
import {MyTabs} from './routes/Tabs';

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
        console.log('aqui');
        Linking.openURL(linking);
        return;
      }
      navigation.navigate('Home');
      return;
    }

    navigation.navigate('Authentication');
  }, [linking, navigation, user]);

  return <MyTabs />;
};

export default App;
