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

export default function Protector() {
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
      padding: 20,
    },
    title: {
      fontSize: 36,
      fontWeight: 'bold',
    },
    text: {
      marginTop: 10,
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
      marginTop: 10,
      width: Width - 20,
    },
  });

  const [email, setEmail] = React.useState('');

  return (
    <Layout style={styles.container}>
      <SafeAreaView style={styles.view}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView style={{height: Height}}>
            <Image source={background} style={styles.background} />
            <Layout style={styles.view1}>
              <Text style={styles.title}>Quên mật khẩu</Text>
              <Text style={styles.text}>
                Chúng tôi sẽ gửi thông tin về mật khẩu cho bạn vào email bạn
                cung cấp
              </Text>

              <Input
                style={styles.input}
                size="large"
                status="primary"
                placeholder="Email ..."
                value={email}
                onChangeText={(email) => setEmail(email)}
              />

              <Button
                style={styles.button}
                size="giant"
                onPress={() => {
                  console.log('___continue');
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
