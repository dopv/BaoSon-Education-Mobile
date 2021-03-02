import {Button, Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {Image, SafeAreaView} from 'react-native';

import {styles} from './styles';
import background from '../../../asset/image/background.jpg';

export default function index() {
  return (
    <Layout style={styles.container}>
      <SafeAreaView style={styles.view}>
        <Image source={background} style={styles.background} />
        <Layout style={styles.welcome}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.text}>
            Chào mừng bạn đã đến với ứng dụng của chúng tôi. Nhấn
            <Text style={styles.bold}> "Tiếp tục"</Text> để sử dụng ứng dụng
          </Text>
          <Button style={styles.button} size="giant" status="primary">
            Tiếp tục
          </Button>
        </Layout>
      </SafeAreaView>
    </Layout>
  );
}
