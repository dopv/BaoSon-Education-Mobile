import {StyleSheet, Dimensions} from 'react-native';
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Height,
  },
  view: {
    flexDirection: 'column',
    height: Height,
  },
  background: {
    height: Height,
    width: Width,
  },
  login: {
    height: Height * 0.6,
    width: Width,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    zIndex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0.35 * Height,
    borderWidth: 1,
    borderColor: '#0099FF',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  text: {
    marginTop: 20,
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 40,
  },
  input: {
    paddingHorizontal: 20,
    borderRadius: 40,
    marginTop: 5,
    width: Width - 40,
  },
  checked: {},
  view2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: Width - 40,
  },
  check_text: {},
  forgot_pass: {
    textDecorationLine: 'underline',
  },
  sign_in_text: {
    textDecorationLine: 'underline',
  },
});
