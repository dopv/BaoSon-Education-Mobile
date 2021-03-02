import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Button,
  Icon,
  Input,
  Layout,
  Spinner,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import React from 'react';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Post} from '../../../lib/networking';
import {TOKEN} from '../../../asset/KeyStore';

import background from '../../../asset/image/background.jpg';
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

export default function Register({route, navigation}) {
  const styles = useStyleSheet({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    background: {
      height: Height,
      width: Width,
    },
    view: {
      flexDirection: 'column',
      height: Height,
    },
    form_layout: {
      height: Height * 0.65,
      width: Width,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      zIndex: 1,
      // justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'whitesmoke',
      position: 'absolute',
      top: Height * 0.35,
      borderWidth: 1,
      borderColor: '#0099FF',
      padding: 20,
    },
    title: {
      fontSize: 36,
      fontWeight: 'bold',
    },
    text: {
      marginTop: 20,
      fontSize: 16,
      lineHeight: 22,
      textAlign: 'center',
    },
    input: {
      paddingHorizontal: 20,
      borderRadius: 40,
      marginTop: 5,
      width: Width - 40,
    },
    button: {
      marginTop: 20,
      paddingHorizontal: 40,
      paddingVertical: 10,
      borderRadius: 40,
    },
    decorLine: {
      textDecorationLine: 'underline',
      color: '#2690D6',
    },
    spinner: {alignItems: 'center', justifyContent: 'center'},
  });

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password_confirmation, setConfirmPass] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const {code} = route.params;

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

  const _onRegister = () => {
    setLoading(true);
    Post('auth/register', {email, password, password_confirmation})
      .then((response) => {
        response.json().then(async (data) => {
          if (data.message) {
            setLoading(false);
            setError(true);
          } else {
            let token = await JSON.stringify(data.access_token);
            await AsyncStorage.setItem(TOKEN, token);
            setLoading(true);
            setError(false);
            navigation.navigate('Home');
          }
        });
      })
      .catch((e) => {
        console.log('_err: ', e);
      });
  };

  return (
    <Layout style={styles.container}>
      <SafeAreaView>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView style={styles.view}>
            <Image source={background} style={styles.background} />
            <Layout style={styles.form_layout}>
              <Text style={styles.title}>Đăng ký</Text>
              {!error ? (
                <Text style={styles.text}>
                  Vui lòng nhập thông tin cơ bản để hoàn thành đăng ký
                </Text>
              ) : (
                <Text style={[styles.text, {color: 'red'}]}>
                  Email đã tồn tại
                </Text>
              )}
              <Input
                style={styles.input}
                size="large"
                status="primary"
                disabled={true}
                value={code}
              />
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
                status="primary"
                value={password}
                placeholder="Password ..."
                accessoryRight={renderIcon}
                secureTextEntry={secureTextEntry}
                onChangeText={(password) => setPassword(password)}
              />
              <Input
                size="large"
                style={styles.input}
                status="primary"
                value={password_confirmation}
                placeholder="Confirm Pass ..."
                accessoryRight={renderIcon}
                secureTextEntry={secureTextEntry}
                onChangeText={(confirmPass) => setConfirmPass(confirmPass)}
              />
              <Button
                style={styles.button}
                size="giant"
                accessoryRight={loading ? LoadingIndicator : null}
                onPress={_onRegister}>
                Đăng ký
              </Button>
              <Text style={styles.text}>
                Bạn đã có tài khoản.{' '}
                <Text
                  style={styles.decorLine}
                  onPress={() => {
                    navigation.navigate('Login');
                  }}>
                  Đăng nhập
                </Text>
              </Text>
            </Layout>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Layout>
  );
}
