import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// Components
import CommentBottomStrap from './CommentBottomStrap';

const CommentContent = props => {
  return (
    <View style={[styles.wrapper, {marginLeft: props.subComment ? 100 : 58}]}>
      <Text style={styles.text}>{props.content}</Text>
      <CommentBottomStrap likes={props.likes} comments={props.comments} />
    </View>
  );
};

export default CommentContent;

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 16,
  },
  text: {
    fontSize: 12,
    lineHeight: 12,
    color: '#313B49',
    marginBottom: 8,
  },
});
