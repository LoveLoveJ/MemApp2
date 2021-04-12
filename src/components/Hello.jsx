import { string, bool, shape } from 'prop-types';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import  Hello   from './src/components/Hello';

function Hello(props) {
  const { children, bang, style } = props;
  return (
    <View>
      <text style={[styles.text, style]}>
        {`Hello ${children}${bang ? '!' : ''}`}
      </text>
    </View>
  );
}

Hello.propTypes = {
  children: string.isRequired,
  bang: bool,
  style: shape(),
};

Hello.defaultProps = {
  bang: bool,
  style: null,
};

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    backgroudcolor: 'blue',
    fontsize: 40,
    fontweight: 'bold',
    padding: 16,
  },
});

export default Hello;
