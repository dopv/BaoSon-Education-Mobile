/* eslint-disable react-hooks/rules-of-hooks */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Button,
  Input,
  Layout,
  Radio,
  Spinner,
  Text,
} from '@ui-kitten/components';
import React from 'react';
import {
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Dimensions,
  Keyboard,
  View,
} from 'react-native';
import {TOKEN} from '../../../asset/KeyStore';
import {Post} from '../../../lib/networking';

const Height = Dimensions.get('screen').height;
import background from '../../../asset/image/background.jpg';
import {styles} from './styles';

export default function index({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [checked, setChecked] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const LoadingIndicator = (props) => (
    <View style={styles.spinner}>
      <Spinner size="small" />
    </View>
  );

  const _onLogin = () => {
    setLoading(true);
    Keyboard.dismiss();
    Post('auth/login', {email, password})
      .then((response) => {
        console.log('__res: ', response);
        response.json().then(async (data) => {
          console.log('___loginData: ', data);
          let token = await JSON.stringify(data.access_token);
          await AsyncStorage.setItem(TOKEN, token);
          setLoading(false);
          navigation.navigate('Home');
        });
      })
      .catch((error) => {
        console.log('err: ', error);
      });
  };

  // console.log('___check: ', checked);
  return (
    <Layout style={styles.container}>
      <SafeAreaView style={styles.view}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView style={{height: Height}}>
            <Image source={background} style={styles.background} />
            <Layout style={styles.login}>
              <Text style={styles.title}>Đăng nhập</Text>
              <Text style={styles.text}>
                Vui lòng đăng nhập tài khoản để sử dụng ứng dụng
              </Text>
              <Input
                style={styles.input}
                size="large"
                status="primary"
                placeholder="Email ..."
                value={email}
                onChangeText={(email) => setEmail(email)}
              />
              <Input
                style={styles.input}
                size="large"
                status="primary"
                placeholder="Password ..."
                value={password}
                onChangeText={(password) => setPassword(password)}
              />
              <Layout style={styles.view2}>
                <Radio
                  style={styles.checked}
                  checked={checked}
                  onChange={(nextChecked) => setChecked(nextChecked)}>
                  <Text style={styles.check_text}>Ghi nhớ</Text>
                </Radio>
                <Text
                  style={styles.forgot_pass}
                  onPress={() => {
                    navigation.navigate('ForgotPass');
                  }}>
                  Quên mật khẩu?
                </Text>
              </Layout>
              <Button
                style={styles.button}
                accessoryRight={loading ? LoadingIndicator : null}
                size="giant"
                onPress={_onLogin}>
                Đăng nhập
              </Button>
              <Text style={styles.text}>
                Bạn chưa có tài khoản.{' '}
                <Text
                  style={styles.sign_in_text}
                  onPress={() => {
                    navigation.navigate('Protector');
                  }}>
                  Đăng ký
                </Text>
              </Text>
            </Layout>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Layout>
  );
}
