/* eslint-disable react-native/no-inline-styles */
import {Icon, Layout, List, Text} from '@ui-kitten/components';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Header from '../../../components/Header';
import ListItem from '../news/component/ListItem';

const data = new Array(20).fill({
  date: 'dd/mm/yyyy',
  in: '3.000.000',
  out: '3.000.000',
});

export default function index({navigation}) {
  const renderItem = ({item, index}) => <ListItem item={item} index={index} />;

  return (
    <Layout style={styles.container}>
      <Layout style={styles.background} />
      <Header navigation={navigation} />
      <Layout style={styles.revenue}>
        <Layout>
          <Text style={styles.text_title}>Doanh thu của bạn</Text>
          <Text style={[styles.bold, styles.text_title]}>50.000.000 đ</Text>
        </Layout>
        <Layout style={styles.layout_icon}>
          <Icon name="file-text-outline" fill="white" style={styles.med_icon} />
        </Layout>
      </Layout>

      <Layout style={styles.layout_link}>
        <TouchableOpacity
          style={[styles.link_item, {backgroundColor: '#F255FB'}]}
          onPress={() => navigation.navigate('Member')}>
          <Icon style={styles.med_icon} name="users" pack="fontawesome" />
          <Text style={styles.white}>Danh sách thành viên</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.link_item, {backgroundColor: '#2ade79'}]}
          onPress={() => navigation.navigate('Exchange')}>
          <Icon style={styles.med_icon} name="exchange" pack="fontawesome" />
          <Text style={styles.white}>Xem giao dịch</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.link_item, {backgroundColor: '#04B0F9'}]}
          onPress={() => navigation.navigate('Exchange')}>
          <Icon style={styles.med_icon} name="share-alt" pack="fontawesome" />
          <Text style={styles.white}>Chia sẻ liên kết</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.link_item, {backgroundColor: '#DBBF16'}]}
          onPress={() => navigation.navigate('OrgChart')}>
          <Icon style={styles.med_icon} name="organization" pack="simpleline" />
          <Text style={styles.white}>Cây gia phả</Text>
        </TouchableOpacity>
      </Layout>
      <Text style={styles.list_title}>Lịch sử giao dịch</Text>
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
          <Text
            style={styles.btn_more}
            onPress={() => {
              console.log('xem them');
            }}>
            Xem thêm
          </Text>
        )}
        data={data}
        renderItem={renderItem}
      />
    </Layout>
  );
}
