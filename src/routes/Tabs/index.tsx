import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StackRoutes} from '../Stack';

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AppRoutes" component={StackRoutes} />
    </Tab.Navigator>
  );
}
