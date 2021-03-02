import Fetch from 'node-fetch';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BASE_URL, TOKEN} from '../../asset/KeyStore';

export const Get = async (path, body) => {
  let header = {
    Authorization: '',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  await AsyncStorage.getItem(TOKEN).then((tokenJson) => {
    let token;
    try {
      token = JSON.parse(tokenJson);
    } catch (e) {
      console.log('e', e);
      AsyncStorage.setItem(TOKEN, '');
    }
    if (token) {
      header.Authorization = `Bearer ${token}`;
    }
  });
  return Fetch(`${BASE_URL}${path}`, {
    method: 'GET',
    headers: header,
  });
};

export const Post = async (path, body) => {
  console.log('__body: ', body);
  let header = {
    Authorization: '',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  await AsyncStorage.getItem(TOKEN).then((tokenJson) => {
    let token;
    try {
      token = JSON.parse(tokenJson);
    } catch (e) {
      console.log('e', e);
      AsyncStorage.setItem(TOKEN, '');
    }
    if (token) {
      header.Authorization = `Bearer ${token}`;
    }
  });
  return Fetch(`${BASE_URL}${path}`, {
    method: 'POST',
    headers: header,
    body: JSON.stringify(body),
  });
};

export const Put = async (path, body) => {
  // console.log('Put', path)
  let header = {
    Authorization: '',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  await AsyncStorage.getItem(TOKEN).then((tokenJson) => {
    let token;
    try {
      token = JSON.parse(tokenJson);
    } catch (e) {
      console.log('e', e);
      AsyncStorage.setItem(TOKEN, '');
    }
    if (token) {
      header.Authorization = `Bearer ${token}`;
    }
  });
  return Fetch(`${BASE_URL}${path}`, {
    method: 'PUT',
    headers: header,
    body: JSON.stringify(body),
  });
};
