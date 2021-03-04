/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useContainer} from '../store/index';
const Stack = createStackNavigator();

import SplashScreen from '../screens/unAuth/splash';
import LoginScreen from '../screens/unAuth/login/index';
import ProtectorScreen from '../screens/unAuth/register/Protector';
import RegisterScreen from '../screens/unAuth/register/Register';
import ForgotPassScreen from '../screens/unAuth/forgotPass';

import MyDrawer from './Drawer';

import {TOKEN} from '../asset/KeyStore';
import {Get} from '../lib/networking/index';

export default function index() {
  const [isLoading, setIsLoading] = React.useState(true);

  const token = useContainer((container) => container.token);
  const setUserInfo = useContainer((container) => container.getUserInfoAction);
  // const isLogout = useContainer((container) => container.isLogout);

  React.useEffect(() => {
    checkToken();
  }, []);

  const checkToken = () => {
    let t = setTimeout(async () => {
      let tokenJson = await AsyncStorage.getItem(TOKEN);
      if (tokenJson) {
        let token;
        try {
          token = JSON.parse(tokenJson);
        } catch (e) {
          token = false;
          AsyncStorage.setItem(TOKEN, '');
        }
        if (token) {
          await getUserInfo(token);
          // updatePushToken()
          setIsLoading(false);
          clearTimeout(t);
        }
      } else {
        setIsLoading(false);
        clearTimeout(t);
      }
    }, 3000);
  };

  const getUserInfo = (token) => {
    Get('me/profile')
      .then((response) => {
        response.json().then((data) => {
          // console.log('__data: ', data);
          setUserInfo(data.data, token);
          setIsLoading(false);
        });
      })
      .catch((e) => {
        console.log('__e: ', e);
      });
  };

  // console.log('___token: ', token);
  // console.log('___loading: ', isLoading);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {isLoading ? (
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
        ) : !token ? (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Protector"
              component={ProtectorScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ForgotPass"
              component={ForgotPassScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Drawer"
              component={MyDrawer}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <Stack.Screen
            name="Drawer"
            component={MyDrawer}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
