import {LinkingOptions} from '@react-navigation/native';

type ParamList = {
  Home: unknown;
  AppRoutes: any;
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
