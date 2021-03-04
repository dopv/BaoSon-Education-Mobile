/* eslint-disable react-hooks/rules-of-hooks */
import {
  Avatar,
  Icon,
  Layout,
  Menu,
  MenuItem,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import React from 'react';
import {Dimensions} from 'react-native';

const Width = Dimensions.get('screen').width;

export default function index({navigation}) {
  const styles = useStyleSheet({
    container: {flex: 1},
    header: {
      height: 250,
      backgroundColor: '#78C9FF',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    avatar: {
      height: 100,
      width: 100,
      marginBottom: 20,
    },
    menu: {
      width: Width,
      marginTop: 20,
    },
    text: {
      color: 'white',
      fontSize: 16,
    },
    drawer: {
      width: 25,
      height: 25,
    },
    layout_drawer: {
      position: 'absolute',
      zIndex: 1,
      top: 10,
      left: 10,
      backgroundColor: 'transparent',
    },
  });

  const UserIcon = (props) => <Icon {...props} name="person-outline" />;
  const StatisticalIcon = (props) => (
    <Icon {...props} name="file-text-outline" />
  );
  const HistoryIcon = (props) => <Icon {...props} name="clock-outline" />;
  const ChangePassIcon = (props) => (
    <Icon {...props} name="lock" pack="fontawesome" />
  );
  const IntroduceIcon = (props) => <Icon {...props} name="info-outline" />;
  const ContactIcon = (props) => <Icon {...props} name="phone-call-outline" />;
  const LogOutIcon = (props) => <Icon {...props} name="log-out-outline" />;

  return (
    <Layout style={styles.container}>
      <Layout style={styles.layout_drawer}>
        <Icon
          style={styles.drawer}
          onPress={() => navigation.openDrawer()}
          name="menu-outline"
          fill="white"
        />
      </Layout>
      <Layout style={styles.header}>
        <Avatar
          source={require('../../../asset/image/icon.png')}
          style={styles.avatar}
        />
        <Text style={[styles.text, {fontWeight: 'bold'}]}>Pham Van Do</Text>
        <Text style={styles.text}>Mã giới thiệu: 123456</Text>
        <Text style={styles.text}>ID: 654321</Text>
      </Layout>
      <Layout style={styles.menu}>
        <Menu>
          <MenuItem
            title="Thông tin cá nhân"
            accessoryLeft={UserIcon}
            onPress={() => navigation.navigate('Detail')}
          />
          <MenuItem
            title="Thống kê doanh thu"
            accessoryLeft={StatisticalIcon}
            onPress={() => navigation.navigate('Statistical')}
          />
          <MenuItem
            title="Lịch sử doanh thu"
            accessoryLeft={HistoryIcon}
            onPress={() => navigation.navigate('History')}
          />
          <MenuItem
            title="Đổi mật khẩu"
            accessoryLeft={ChangePassIcon}
            onPress={() => navigation.navigate('ChangePass')}
          />
          <MenuItem
            title="Giới thiệu"
            accessoryLeft={IntroduceIcon}
            onPress={() => navigation.navigate('Introduce')}
          />
          <MenuItem
            title="Liên hệ"
            accessoryLeft={ContactIcon}
            onPress={() => navigation.navigate('Contact')}
          />
          <MenuItem
            title="Đăng xuất"
            accessoryLeft={LogOutIcon}
            // onPress={() => navigation.navigate('Detail')}
          />
        </Menu>
      </Layout>
    </Layout>
  );
}
