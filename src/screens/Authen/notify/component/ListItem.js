import {Layout, Text, useStyleSheet} from '@ui-kitten/components';
import React from 'react';
import {} from 'react-native';

export default function ListItem({item, index}) {
  const styles = useStyleSheet({
    container: {
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    title: {
      fontWeight: 'bold',
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
      <Text style={styles.bold}>{item.title}</Text>
      <Text>{item.time}</Text>
    </Layout>
  );
}
