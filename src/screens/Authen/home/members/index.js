/* eslint-disable react-hooks/rules-of-hooks */
import {
  Icon,
  Input,
  Layout,
  List,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import React from 'react';
import {Dimensions} from 'react-native';
import ListItem from './ListItem';

const Width = Dimensions.get('screen').width;

const data = new Array(20).fill({
  id: '123456',
  name: 'Pham van Do',
  avatar: '../../../../asset/image/icon.png',
  cmt: '0123456789',
  protector: '789456',
});

export default function index() {
  const styles = useStyleSheet({
    container: {flex: 1},
    form_input: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
    },
    input: {
      marginHorizontal: 20,
      width: Width - 100,
      borderRadius: 40,
      height: 40,
    },
    layout_icon: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 40,
      height: 40,
      marginRight: 20,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: '#78C9FF',
    },
    icon: {
      width: 25,
      height: 25,
    },
    layout_list: {
      width: Width,
      marginTop: 20,
    },
  });
  const [value, setValue] = React.useState('');

  const renderItem = ({item, index}) => <ListItem item={item} index={index} />;

  return (
    <Layout style={styles.container}>
      <Layout style={styles.form_input}>
        <Input
          style={styles.input}
          placeholder="Place your Text"
          value={value}
          onChangeText={(nextValue) => setValue(nextValue)}
        />
        <Layout style={styles.layout_icon}>
          <Icon
            style={styles.icon}
            fill="black"
            name="search-outline"
            onPress={() => {
              console.log('search');
            }}
          />
        </Layout>
      </Layout>
      <List style={styles.layout_list} data={data} renderItem={renderItem} />
    </Layout>
  );
}
