import React from 'react';
import {} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MyTab from './TabNavigator';
import NotifyScreen from '../screens/Authen/notify/index';

const LeftDrawer = createDrawerNavigator();

export default function Drawer() {
  return (
    <LeftDrawer.Navigator initialRouteName="Tab">
      <LeftDrawer.Screen name="Tab" component={MyTab} />
      <LeftDrawer.Screen name="Notify" component={NotifyScreen} />
    </LeftDrawer.Navigator>
  );
}
