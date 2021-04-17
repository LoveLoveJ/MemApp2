import { string, bool, shape } from 'prop-types';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Hello(props) {
  const { children, bang, style } = props;
  return (
    <View>
      <Text style={[styles.Text, style]}>
        {`Hello ${children}${bang ? '!' : ''}`}
      </Text>
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
  Text: {
    color: '#ffffff',
    backgroudcolor: 'blue',
    fontsize: 40,
    fontweight: 'bold',
    padding: 16,
  },
});

export default Hello;
