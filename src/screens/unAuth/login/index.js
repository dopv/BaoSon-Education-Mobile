/* eslint-disable react-hooks/rules-of-hooks */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Button,
  Input,
  Layout,
  Radio,
  Spinner,
  Text,
  Icon,
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
  TouchableWithoutFeedback,
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
  const [error, setError] = React.useState(false);
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const LoadingIndicator = (props) => (
    <View style={styles.spinner}>
      <Spinner size="small" status="danger" />
    </View>
  );
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  const _onLogin = () => {
    setLoading(true);
    Keyboard.dismiss();
    Post('auth/login', {email, password})
      .then((response) => {
        response.json().then(async (data) => {
          if (data.message) {
            setError(true);
          } else {
            let token = await JSON.stringify(data.access_token);
            await AsyncStorage.setItem(TOKEN, token);
            setLoading(false);
            setError(false);
            navigation.navigate('Home');
          }
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
              {!error ? (
                <Text style={styles.text}>
                  Vui lòng đăng nhập tài khoản để sử dụng ứng dụng
                </Text>
              ) : (
                <Text style={[styles.text, {color: 'red'}]}>
                  Sai thông tin đăng nhập
                </Text>
              )}
              <Input
                style={styles.input}
                size="large"
                status={!error ? 'primary' : 'danger'}
                placeholder="Email ..."
                value={email}
                onChangeText={(email) => setEmail(email)}
              />
              <Input
                size="large"
                style={styles.input}
                status={!error ? 'primary' : 'danger'}
                value={password}
                placeholder="Password ..."
                accessoryRight={renderIcon}
                secureTextEntry={secureTextEntry}
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
