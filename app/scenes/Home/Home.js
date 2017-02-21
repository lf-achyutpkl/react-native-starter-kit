import {
  Text,
  View,
  Image
} from 'react-native';
import React, {Component} from 'react';

import styles from './styles';
import image from '../../config/image';
import HeaderText from '../../components/HeaderText';

class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
        <HeaderText title='Welcome to React Native'/>
        <Image
          source={image.LOGO}
          style={styles.logo}
        />
        <Text style={styles.paragraphText}>
          It is recommended to init a new project using react native cli rather than starting by cloning this repo.
        </Text>
        <Text style={styles.paragraphText}>
          But you can take reference to project folder structure for code re-usability.
        </Text>
      </View>
    );
  }
}

export default Home;
