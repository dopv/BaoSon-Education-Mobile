import {Layout, useStyleSheet} from '@ui-kitten/components';
import React from 'react';
import {Image, ActivityIndicator} from 'react-native';
import splash from '../../../asset/image/splash.png';

export default function SplashScreen() {
  const styles = useStyleSheet({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    logo: {
      width: '70%',
      resizeMode: 'contain',
    },
  });
  return (
    <Layout style={styles.container}>
      <Image source={splash} style={styles.logo} />
      <ActivityIndicator size={60} color="#8dd434" />
    </Layout>
  );
}
