import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import theBook from '../../../../models/detailBook';
import Color from '../../../../config/utils/color';
import { ms } from 'react-native-size-matters';

const Overview = () => {
  return (
    <View style={styles.description}>
      <Text style={styles.overviewText}>Overview</Text>
      <Text style={styles.textDesc}>{theBook.synopsis}</Text>
    </View>
  );
};

export default Overview;

const styles = StyleSheet.create({
  description: {
    margin: ms(20),
  },
  overviewTitle: {
    backgroundColor: Color.NON_ACTIVE_COLOR,
    padding: ms(15),
    borderRadius: ms(15),
  },
  overviewText: {
    fontSize: ms(15),
    color: Color.DISABLE_BUTTON_COLOR,
    fontWeight: 'bold',
  },
  textDesc: {
    color: Color.NON_ACTIVE_COLOR,
    fontSize: ms(12),
    fontWeight: '500',
    marginTop: ms(6),
    letterSpacing: ms(1),
    lineHeight: ms(18),
  },
});
