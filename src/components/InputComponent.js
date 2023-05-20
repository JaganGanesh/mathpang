import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

const SearchImage = require('../assets/searchIcon.png');

const InputComponent = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.image}>
        <TouchableOpacity onPress={() => {}}>
          <Image source={SearchImage} style={{height: 20}} />
        </TouchableOpacity>
      </View>
      <TextInput style={styles.input} placeholder="댓글을 남겨주세요." />
      <View style={styles.search}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.searchText}>등록</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  wrapper: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    flexDirection: 'row',
    height: 42,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  input: {
    flexGrow: 1,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 12,
    padding: 16,
  },
  searchText: {
    fontSize: 12,
    lineHeight: 12,
    color: '#919EB6',
    fontWeight: '500',
  },
});
