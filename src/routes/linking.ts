import {LinkingOptions} from '@react-navigation/native';

type ParamList = {
  Home: undefined;
  AppRoutes: undefined;
};

const linking: LinkingOptions<ParamList> = {
  prefixes: ['pokeapp.linkedin://'],
  config: {
    screens: {
      Home: {
        path: 'home',
      },
      AppRoutes: {
        screens: {
          Pokemon: {
            path: 'pokemon/:id',
          },
        },
      },
    },
  },
};

export default linking;
