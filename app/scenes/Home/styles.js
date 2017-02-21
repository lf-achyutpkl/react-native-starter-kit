import {StyleSheet} from 'react-native';
import {colors} from '../../config/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backgroundColor
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain'
  },
  paragraphText: {
    padding: 16,
    textAlign: 'center'
  }
});
