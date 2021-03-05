import {Icon, Layout, Text, useStyleSheet} from '@ui-kitten/components';
import React from 'react';
import {Image} from 'react-native';

export default function ListItem({navigation, item, index}) {
  const styles = useStyleSheet({
    container: {
      flexDirection: 'row',
      paddingVertical: 5,
      alignItems: 'center',
      width: '100%',
      justifyContent: 'space-around',
    },
    layout_infor: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    infor_des: {
      marginLeft: 10,
    },
    avatar: {
      height: 40,
      width: 40,
      borderRadius: 20,
    },
    title: {
      fontSize: 16,
      textAlign: 'center',
    },
    bold: {
      fontWeight: 'bold',
    },
    icon: {
      width: 25,
      height: 25,
    },
  });
  return (
    <Layout style={styles.container}>
      <Text style={styles.title}>{item.id}</Text>
      <Layout style={styles.layout_infor}>
        <Image
          source={{
            uri:
              'https://i.pinimg.com/originals/ca/58/61/ca5861451108c300b1e170cb8b1c47e3.jpg',
          }}
          resizeMode="cover"
          style={styles.avatar}
        />
        <Layout style={styles.infor_des}>
          <Text style={[styles.title, styles.bold]}>{item.name}</Text>
          <Text>{item.cmt}</Text>
        </Layout>
      </Layout>
      <Text style={styles.title}>{item.protector}</Text>
      <Layout>
        <Icon style={styles.icon} fill="black" name="more-vertical-outline" />
      </Layout>
    </Layout>
  );
}
