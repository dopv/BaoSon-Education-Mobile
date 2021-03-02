import {
  Button,
  Icon,
  Input,
  Layout,
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
} from 'react-native';

import background from '../../../asset/image/background.jpg';
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

export default function Register({navigation}) {
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
  });

  const [protectedCode, setProtectedCode] = React.useState('123456789');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPass, setConfirmPass] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

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
              <Text style={styles.text}>
                Vui lòng nhập thông tin cơ bản để hoàn thành đăng ký
              </Text>
              <Input
                style={styles.input}
                size="large"
                status="primary"
                disabled={true}
                value={protectedCode}
                // onChangeText={(code) => setProtectedCode(code)}
              />
              <Input
                style={styles.input}
                size="large"
                status="primary"
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
                value={confirmPass}
                placeholder="Confirm Pass ..."
                accessoryRight={renderIcon}
                secureTextEntry={secureTextEntry}
                onChangeText={(confirmPass) => setConfirmPass(confirmPass)}
              />
              <Button
                style={styles.button}
                size="giant"
                onPress={() => {
                  console.log('___continue');
                }}>
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
