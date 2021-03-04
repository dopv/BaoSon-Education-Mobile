/* eslint-disable react-hooks/rules-of-hooks */
import {
  Avatar,
  Button,
  Input,
  Layout,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import React from 'react';
import {Dimensions, ScrollView} from 'react-native';

const Width = Dimensions.get('screen').width;

export default function index() {
  const styles = useStyleSheet({
    container: {
      flex: 1,
    },
    avatar: {
      height: 100,
      width: 100,
      marginBottom: 20,
    },
    text: {
      color: 'white',
      fontSize: 16,
    },
    header: {
      // height: 200,
      padding: 20,
      marginTop: 5,
      backgroundColor: '#78C9FF',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    form: {
      width: Width,
    },
    header_title: {
      fontSize: 18,
      fontWeight: 'bold',
      paddingHorizontal: 20,
      paddingVertical: 5,
    },
    form_input: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 2,
    },
    title: {
      width: Width * 0.3,
      paddingLeft: 20,
    },
    input: {
      width: Width * 0.7,
      paddingRight: 20,
    },
    layout_button: {
      flexDirection: 'row',
      marginHorizontal: 20,
      marginVertical: 5,
      justifyContent: 'space-around',
    },
    button: {
      margin: 2,
    },
  });

  return (
    <Layout style={styles.container}>
      <ScrollView style={styles.container}>
        <Layout style={styles.header}>
          <Avatar
            source={require('../../../../asset/image/icon.png')}
            style={styles.avatar}
          />
          <Text style={[styles.text, {fontWeight: 'bold'}]}>Pham Van Do</Text>
          <Text style={styles.text}>Mã giới thiệu: 123456</Text>
          <Text style={styles.text}>ID: 654321</Text>
        </Layout>
        <Layout style={styles.form}>
          <Text style={styles.header_title}>Thông tin cá nhân</Text>
          <Layout style={styles.form_input}>
            <Text style={styles.title}>Họ tên:</Text>
            <Input style={styles.input} multiline={true} />
          </Layout>
          <Layout style={styles.form_input}>
            <Text style={styles.title}>Email:</Text>
            <Input style={styles.input} />
          </Layout>
          <Layout style={styles.form_input}>
            <Text style={styles.title}>Chứng minh thư</Text>
            <Input style={styles.input} />
          </Layout>
          <Layout style={styles.form_input}>
            <Text style={styles.title}>Số tài khoản ngân hàng</Text>
            <Input style={styles.input} />
          </Layout>
          <Layout style={styles.form_input}>
            <Text style={styles.title}>Mã số thuế</Text>
            <Input style={styles.input} />
          </Layout>
          <Layout style={styles.form_input}>
            <Text style={styles.title}>Địa chỉ</Text>
            <Input style={styles.input} />
          </Layout>
          <Layout style={styles.form_input}>
            <Text style={styles.title}>Người giới thiệu</Text>
            <Input style={styles.input} />
          </Layout>
        </Layout>
        <Layout style={styles.layout_button}>
          <Button
            style={styles.button}
            appearance="outline"
            status="primary"
            size="medium">
            Cập nhật
          </Button>
          <Button
            style={styles.button}
            appearance="outline"
            status="danger"
            size="medium">
            Hủy
          </Button>
        </Layout>
      </ScrollView>
    </Layout>
  );
}
