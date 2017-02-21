import {
  Text
} from 'react-native';
import React, {PropTypes} from 'react';

import styles from './styles';

const HeaderText = ({title}) => (
  <Text style={styles.title}>{title}</Text>
);

HeaderText.propsTypes = {
  title: PropTypes.string.isRequired
};

export default HeaderText;