import React from 'react';
import {} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './TabNavigator';
import NotifyScreen from '../screens/Authen/notify/index';

const LeftDrawer = createDrawerNavigator();

export default function Drawer() {
  return (
    <LeftDrawer.Navigator initialRouteName="Home">
      <LeftDrawer.Screen name="Home" component={Home} />
      <LeftDrawer.Screen name="Notify" component={NotifyScreen} />
    </LeftDrawer.Navigator>
  );
}
