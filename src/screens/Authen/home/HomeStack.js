import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {} from 'react-native';

const Stack = createStackNavigator();

import Home from './index';
import MemberScreen from './members/index';
import Exchange from './exchange/index';
import OrgChart from './orgChart/index';

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#78C9FF',
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Exchange"
        component={Exchange}
        options={{title: 'Giao dịch'}}
      />
      <Stack.Screen
        name="Member"
        component={MemberScreen}
        options={{title: 'Danh sách thành viên'}}
      />
      <Stack.Screen
        name="OrgChart"
        component={OrgChart}
        options={{title: 'Cây gia phả'}}
      />
    </Stack.Navigator>
  );
}
