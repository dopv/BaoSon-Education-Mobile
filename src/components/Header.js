import {
  Avatar,
  Icon,
  Input,
  Layout,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import React from 'react';
import {Dimensions} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import icon from '../asset/image/icon.png';
const Width = Dimensions.get('screen').width;

export default function Header({navigation}) {
  const styles = useStyleSheet({
    container: {
      position: 'absolute',
      top: 0,
      height: 60,
      width: Width,
      // justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
      flexDirection: 'row',
      zIndex: 1,
    },
    icon: {
      width: 25,
      height: 25,
      marginHorizontal: 10,
    },
    avatar: {
      marginRight: 10,
    },
    text: {
      fontSize: 18,
    },
    search: {
      width: Width - 100,
      borderRadius: 40,
    },
    layout_search: {
      position: 'absolute',
      right: 10,
      height: 40,
      width: 40,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  const [show, setShow] = React.useState(false);
  const [search, setSearch] = React.useState('');

  const _onSearch = () => {
    if (search === '') {
      setShow(!show);
    } else {
      console.log('search');
    }
  };

  const _openDrawer = () => {
    console.log('__open drawer');
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <Layout style={styles.container}>
      <Icon
        style={styles.icon}
        fill="black"
        name="menu"
        onPress={_openDrawer}
      />
      {!show ? (
        <>
          <Avatar style={styles.avatar} size="medium" source={icon} />
          <Text style={styles.text}>Pham Van Do</Text>
        </>
      ) : (
        <Input
          style={styles.search}
          placeholder="Search..."
          value={search}
          onChangeText={(nextValue) => setSearch(nextValue)}
        />
      )}
      <Layout style={styles.layout_search}>
        <Icon
          style={styles.icon}
          onPress={_onSearch}
          fill="black"
          name="search"
        />
      </Layout>
    </Layout>
  );
}
