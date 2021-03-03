import {StyleSheet, Dimensions} from 'react-native';
const Width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  background: {
    height: 120,
    width: Width,
    backgroundColor: '#2BBAD4',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  revenue: {
    position: 'absolute',
    height: 100,
    width: Width - 40,
    top: 80,
    left: 20,
    zIndex: 1,
    borderRadius: 20,
    flexDirection: 'row',
    padding: 20,
    // borderColor: '#2BBAD4',
    // borderWidth: 1,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  layout_icon: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: '#2BBAD4',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 20,
    right: 20,
  },
  text_title: {
    fontSize: 18,
  },
  bold: {
    fontWeight: 'bold',
  },
  layout_link: {
    width: Width - 30,
    height: 200,
    marginTop: 70,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  link_item: {
    height: 80,
    width: (Width - 50) / 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 5,
  },
  med_icon: {
    width: 30,
    height: 30,
  },
  layout_list: {
    width: Width - 40,
  },
  list_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  list_item: {
    marginTop: 5,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
