import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const Bookmark = require('../assets/bookmark.png');
const Comments = require('../assets/comment.png');
const Heart = require('../assets/heart.png');
const Dots = require('../assets/dots.png');

const CommentBottomStrap = props => {
  return (
    <View style={styles.wrapper}>
      {props.likes ? (
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.ContentWrapper}>
            <Image source={Heart} style={{width: 20, marginHorizontal: 8}} />
            <Text style={styles.text}>{props.likes}</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <></>
      )}
      {props.comments ? (
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.ContentWrapper}>
            <Image source={Comments} style={{width: 20, marginHorizontal: 8}} />
            <Text style={styles.text}>{props.comments}</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <></>
      )}
      <View style={{flexGrow: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.ContentWrapper}>
            <Image source={Dots} style={{width: 20, marginHorizontal: 8}} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommentBottomStrap;

const styles = StyleSheet.create({
  wrapper: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ContentWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    lineHeight: 12,
    fontWeight: '400',
    color: '#919EB6',
  },
});
