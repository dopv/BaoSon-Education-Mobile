/* eslint-disable react-hooks/rules-of-hooks */
import {Button, Layout, List, Text, useStyleSheet} from '@ui-kitten/components';
import React from 'react';
import {Dimensions} from 'react-native';
import Header from '../../../components/Header';
import ListItem from './component/ListItem';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const data = new Array(20).fill({
  title: 'Item',
  time: '10 phút trước',
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
      padding: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.0,

      elevation: 24,
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
        <Text style={styles.header_title}>Thông báo của bạn</Text>
        <Text style={[styles.header_link, styles.header_title]}>xem thêm</Text>
      </Layout>
      <List
        style={styles.layout_list}
        data={data}
        ListFooterComponent={() => (
          <Text style={styles.btn_more}>Xem thêm</Text>
        )}
        renderItem={renderItem}
      />
    </Layout>
  );
}
