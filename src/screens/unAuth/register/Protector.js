import {
  Button,
  Input,
  Layout,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import React from 'react';
import {
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  Dimensions,
  Platform,
  ScrollView,
} from 'react-native';

import background from '../../../asset/image/background.jpg';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

export default function Protector({navigation}) {
  const styles = useStyleSheet({
    container: {
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: Height,
    },
    view: {
      flexDirection: 'column',
      height: Height,
    },
    background: {
      height: Height,
      width: Width,
    },
    view1: {
      height: Height * 0.45,
      width: Width,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      zIndex: 1,
      // justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'whitesmoke',
      position: 'absolute',
      top: Height * 0.55,
      borderWidth: 1,
      borderColor: '#0099FF',
      padding: 40,
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
    button: {
      marginTop: 20,
      paddingHorizontal: 40,
      paddingVertical: 10,
      borderRadius: 40,
    },
    input: {
      paddingHorizontal: 20,
      borderRadius: 40,
      marginTop: 5,
      width: Width - 40,
    },
  });

  const [protectedCode, setProtectedCode] = React.useState('');

  return (
    <Layout style={styles.container}>
      <SafeAreaView style={styles.view}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView style={{height: Height}}>
            <Image source={background} style={styles.background} />
            <Layout style={styles.view1}>
              <Text style={styles.title}>Đăng ký</Text>
              <Text style={styles.text}>
                Bạn cần nhập mã bảo trợ để đăng ký tài khoản
              </Text>

              <Input
                style={styles.input}
                size="large"
                status="primary"
                placeholder="Code ..."
                value={protectedCode}
                onChangeText={(code) => setProtectedCode(code)}
              />

              <Button
                style={styles.button}
                size="giant"
                onPress={() => {
                  navigation.navigate('Register');
                }}>
                Tiếp tục
              </Button>
            </Layout>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Layout>
  );
}
