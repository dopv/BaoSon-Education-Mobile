/* eslint-disable react-hooks/rules-of-hooks */
import {Layout, List, Text, useStyleSheet} from '@ui-kitten/components';
import React from 'react';
import {Dimensions} from 'react-native';
import Header from '../../../components/Header';
import ListItem from './component/ListItem';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const data = new Array(20).fill({
  date: 'dd/mm/yyyy',
  in: '3.000.000',
  out: '3.000.000',
});

export default function index({navigation}) {
  const styles = useStyleSheet({
    container: {
      flex: 1,
    },
    background: {
      height: Height,
      width: Width,
      backgroundColor: '#78C9FF',
    },
    layout_header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      position: 'absolute',
      top: 70,
      height: 20,
      width: Width,
      zIndex: 1,
      backgroundColor: 'transparent',
      paddingHorizontal: 20,
    },
    header_title: {
      color: 'white',
      fontSize: 16,
    },
    layout_list: {
      position: 'absolute',
      top: 100,
      // left: 20,
      width: Width,
      height: Height * 0.7,
      // borderTopRightRadius: 20,
      // borderTopLeftRadius: 20,
      paddingVertical: 20,
    },
    button: {
      position: 'absolute',
      bottom: 10,
      right: 10,
      zIndex: 10,
    },
    header_link: {
      textDecorationLine: 'underline',
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
      marginTop: 10,
      marginBottom: 40,
      color: 'blue',
      fontSize: 18,
      textDecorationLine: 'underline',
    },
  });

  const renderItem = ({item, index}) => <ListItem item={item} index={index} />;

  return (
    <Layout style={styles.container}>
      <Header navigation={navigation} />
      <Layout style={styles.background} />
      <Layout style={styles.layout_header}>
        <Text style={styles.header_title}>Lịch sử giao dịch</Text>
        <Text style={[styles.header_link, styles.header_title]}>Lọc</Text>
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
