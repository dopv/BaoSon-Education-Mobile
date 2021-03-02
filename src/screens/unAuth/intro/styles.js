import {StyleSheet, Dimensions} from 'react-native';
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    flexDirection: 'column',
    height: Height,
  },
  background: {
    height: Height * 0.6,
    width: Width,
  },
  welcome: {
    height: Height * 0.45,
    width: Width,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    zIndex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    position: 'absolute',
    bottom: 0,
    borderWidth: 1,
    borderColor: '#0099FF',
    padding: 40,
  },
  title: {
    fontSize: 36,
    color: '#a00000',
    fontWeight: 'bold',
  },
  text: {
    marginTop: 20,
    fontSize: 16,
    lineHeight: 22,
    color: 'black',
    textAlign: 'center',
  },
  bold: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    marginTop: 40,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 40,
  },
});
