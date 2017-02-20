import {
    Text,
    View,
    Image
} from 'react-native';
import React, {Component} from 'react';

import styles from './styles';
import image from '../../config/image';

class Home extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome to React Native</Text>
                <Image
                    source={image.LOGO}
                    style={styles.logo}
                />
            </View>
        );
    }
}

export default Home;
