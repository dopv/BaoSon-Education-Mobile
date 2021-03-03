/* eslint-disable react-native/no-inline-styles */
import {Icon, Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {styles} from './styles';
import Header from '../../../components/Header';
import ListItem from './component/ListItem';

export default function index({navigation}) {
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
          <Icon name="file-text-outline" fill="black" style={styles.med_icon} />
        </Layout>
      </Layout>

      <Layout style={styles.layout_link}>
        <Layout style={[styles.link_item, {backgroundColor: '#FF33EE'}]}>
          <Icon style={styles.med_icon} name="users" pack="fontawesome" />
          <Text style={styles.bold}>Danh sách thành viên</Text>
        </Layout>
        <Layout style={[styles.link_item, {backgroundColor: '#26d335'}]}>
          <Icon style={styles.med_icon} name="exchange" pack="fontawesome" />
          <Text style={styles.bold}>Xem giao dịch</Text>
        </Layout>
        <Layout style={[styles.link_item, {backgroundColor: '#04B0F9'}]}>
          <Icon style={styles.med_icon} name="share-alt" pack="fontawesome" />
          <Text style={styles.bold}>Chia sẻ liên kết</Text>
        </Layout>
        <Layout style={[styles.link_item, {backgroundColor: '#f49811'}]}>
          <Icon style={styles.med_icon} name="organization" pack="simpleline" />
          <Text style={styles.bold}>Cây gia phả</Text>
        </Layout>
      </Layout>

      <Layout style={styles.layout_list}>
        <Layout style={styles.list_header}>
          <Text style={styles.bold}>Lịch sử giao dịch</Text>
          <Text style={styles.link}>Xem thêm</Text>
        </Layout>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </Layout>
    </Layout>
  );
}
