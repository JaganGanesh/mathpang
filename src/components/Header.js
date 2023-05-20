import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';

const BackArrow = require('../assets/backArrow.png');
const Bell = require('../assets/bell.png');

const Header = () => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={() => {}}>
        <Image source={BackArrow} style={{height: 18}} />
      </TouchableOpacity>
      <View
        style={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.headerText}>자유톡</Text>
      </View>
      <TouchableOpacity onPress={() => {}}>
        <Image source={Bell} style={{height: 18}} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 19,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 18.7,
  },
  headerText: {
    marginTop: 13,
    marginBottom: 17,
    fontWeight: '700',
    color: '#1D232B',
    fontSize: 18,
    lineHeight: 18,
  },
});
