import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {} from 'react-native';

const Stack = createStackNavigator();

import Profile from './index';
import Detail from './profile_detail';
import Statistical from './statistical';
import History from './history';
import ChangePass from './change_pass';
import Introduce from './introduce';
import Contact from './contact_us';

export default function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#78C9FF',
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{title: 'Thông tin cá nhân'}}
      />
      <Stack.Screen
        name="Statistical"
        options={{title: 'Thống kê doanh thu'}}
        component={Statistical}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{title: 'Lịch sử giao dịch'}}
      />
      <Stack.Screen
        name="ChangePass"
        component={ChangePass}
        options={{title: 'Đổi mật khẩu'}}
      />
      <Stack.Screen
        name="Introduce"
        component={Introduce}
        options={{title: 'Giới thiệu'}}
      />
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{title: 'Liên hệ'}}
      />
    </Stack.Navigator>
  );
}
