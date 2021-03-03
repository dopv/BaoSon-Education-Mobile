import {Icon, Layout, Text, useStyleSheet} from '@ui-kitten/components';
import React from 'react';
import {} from 'react-native';

export default function ListItem() {
  const styles = useStyleSheet({
    container: {
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderWidth: 1,
      marginTop: 5,
      borderRadius: 5,
    },
    layout_des: {},
    bold: {
      fontWeight: 'bold',
    },
    layout_icon: {
      position: 'absolute',
      right: 10,
      top: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      height: 30,
      width: 30,
    },
  });

  const [show, setShow] = React.useState(false);

  return (
    <Layout style={styles.container}>
      <Layout style={styles.layout_des}>
        <Text style={styles.bold}>Title</Text>
        <Text>dd/mm/yyyy</Text>
      </Layout>
      <Layout style={styles.layout_icon}>
        <Icon
          name={show ? 'chevron-down-outline' : 'chevron-up-outline'}
          fill="black"
          style={styles.icon}
          onPress={() => setShow(!show)}
        />
      </Layout>
      {!show ? null : (
        <Layout>
          <Text>sdfghjklasdfghj</Text>
        </Layout>
      )}
    </Layout>
  );
}
