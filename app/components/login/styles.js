import { StyleSheet } from 'react-native';
import { sizes } from '../../config/common-styles';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: sizes.large,
    paddingTop: sizes.large * 2,
  },
  loginInput: {
    padding: sizes.medium,
  },
  // how to arrange content (text) inside of the button
  buttonContent: {
    justifyContent: 'center', // vertical
    alignItems: 'center', // horizontal
    paddingLeft: 30,
    paddingRight: 30,
  },

  // defines the area of the button
  // use this style more than once to to define the area of the visual container (what you see)
  // and the area of the touchable highlight (what you touch)
  roundedArea: {
    height: 46,
    borderRadius: 46 / 2,
  },

  button: {
    backgroundColor: 'transparent',
    borderColor: 'black',
    borderWidth: 1,
  },

  buttonText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    bottom: 2, // nudges button up at little bit so it's a little higher than lower
  },
});
