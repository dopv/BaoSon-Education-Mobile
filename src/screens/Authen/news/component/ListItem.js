import {Icon, Layout, Text, useStyleSheet} from '@ui-kitten/components';
import React from 'react';
import {Dimensions} from 'react-native';

const Width = Dimensions.get('screen').width;

export default function ListItem({item, index}) {
  const styles = useStyleSheet({
    container: {
      paddingVertical: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    title: {
      fontWeight: 'bold',
    },
    icon: {
      height: 25,
      width: 25,
    },
    text: {
      width: Width * 0.25,
      textAlign: 'center',
    },
  });
  let bg;
  if (index % 2 == 0) {
    bg = '#D7FEF3';
  } else {
    bg = 'white';
  }
  return (
    <Layout style={[styles.container, {backgroundColor: bg}]}>
      <Text style={styles.text}>{item.date}</Text>
      <Text style={styles.text}>{item.in} đ</Text>
      <Text style={styles.text}>{item.out} đ</Text>
      <Icon name="chevron-down-outline" fill="black" style={styles.icon} />
    </Layout>
  );
}
