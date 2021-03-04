/* eslint-disable react-hooks/rules-of-hooks */
import {Layout, List, Text, useStyleSheet} from '@ui-kitten/components';
import React from 'react';
import {Dimensions} from 'react-native';
import ListItem from '../../news/component/ListItem';

const Width = Dimensions.get('screen').width;

const data = new Array(20).fill({
  date: 'dd/mm/yyyy',
  in: '3.000.000',
  out: '3.000.000',
});

export default function index() {
  const styles = useStyleSheet({
    container: {flex: 1},
    form: {
      flexDirection: 'row',
      marginTop: 5,
    },
    form_title: {
      width: Width * 0.3,
      paddingHorizontal: 20,
      paddingVertical: 5,
    },
    form_des: {
      width: Width * 0.7,
      paddingHorizontal: 20,
      paddingVertical: 5,
    },
    layout_list: {
      marginTop: 20,
    },
    list_header: {
      flexDirection: 'row',
      paddingHorizontal: 20,
      justifyContent: 'space-around',
      marginBottom: 10,
    },
    list_header_title: {
      width: Width * 0.25,
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    btn_more: {
      textAlign: 'center',
      marginVertical: 10,
      color: 'blue',
      fontSize: 18,
      textDecorationLine: 'underline',
    },
  });

  const renderItem = ({item, index}) => <ListItem item={item} index={index} />;

  return (
    <Layout style={styles.container}>
      <Layout style={styles.form}>
        <Text style={styles.form_title}>Họ tên:</Text>
        <Text style={styles.form_des}>Phạm Văn Độ</Text>
      </Layout>
      <Layout style={styles.form}>
        <Text style={styles.form_title}>Email:</Text>
        <Text style={styles.form_des}>dopv@vicoders.com</Text>
      </Layout>
      <Layout style={styles.form}>
        <Text style={styles.form_title}>Địa chỉ: </Text>
        <Text style={styles.form_des}>Nam Tiến, Nam Trực, Nam Định</Text>
      </Layout>
      <Layout style={styles.form}>
        <Text style={styles.form_title}>Số tài khoản:</Text>
        <Text style={styles.form_des}>0123456789</Text>
      </Layout>
      <Layout style={styles.form}>
        <Text style={styles.form_title}>ID:</Text>
        <Text style={styles.form_des}>654321</Text>
      </Layout>
      <Layout style={styles.form}>
        <Text style={styles.form_title}>Loại tiền:</Text>
        <Text style={styles.form_des}>VND</Text>
      </Layout>
      <List
        style={styles.layout_list}
        ListHeaderComponent={() => (
          <Layout style={styles.list_header}>
            <Text style={styles.list_header_title}>Thời gian</Text>
            <Text style={styles.list_header_title}>Ghi nợ</Text>
            <Text style={styles.list_header_title}>Ghi có</Text>
            <Text> </Text>
          </Layout>
        )}
        ListFooterComponent={() => (
          <Text style={styles.btn_more}>Xem thêm</Text>
        )}
        data={data}
        renderItem={renderItem}
      />
    </Layout>
  );
}
