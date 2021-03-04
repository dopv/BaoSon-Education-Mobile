import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import HomeStack from '../screens/Authen/home/HomeStack';
import NewsScreen from '../screens/Authen/news/index';
import ProfileScreen from '../screens/Authen/profile/ProfileStack';
import NotifyScreen from '../screens/Authen/notify/index';

import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';

export default function TabNavigator() {
  const HomeIcon = (props) => <Icon {...props} name="home-outline" />;
  const BellIcon = (props) => <Icon {...props} name="bell-outline" />;
  const NewsIcon = (props) => <Icon {...props} name="file-text-outline" />;
  const PersonIcon = (props) => <Icon {...props} name="person-outline" />;

  const BottomTabBar = ({navigation, state}) => (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab icon={HomeIcon} title="Home" />
      <BottomNavigationTab icon={NewsIcon} title="News" />
      <BottomNavigationTab icon={BellIcon} title="Notify" />
      <BottomNavigationTab icon={PersonIcon} title="User" />
    </BottomNavigation>
  );
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      tabBar={(props) => <BottomTabBar {...props} />}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="News" component={NewsScreen} />
      <Tab.Screen name="Notify" component={NotifyScreen} />
      <Tab.Screen name="Auth" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
