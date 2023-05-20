import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const ProfilePicture = require('../assets/profilePicture.png');
const VerifiedIcon = require('../assets/verified.png');

const ProfileStrap = props => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.photo}>
          <Image
            source={ProfilePicture}
            style={{height: 38, borderRadius: 50, backgroundColor: '#D9D9D9'}}
          />
        </View>
      </TouchableOpacity>
      <View style={{flexGrow: 1}}>
        <View style={styles.nameWrapper}>
          <Text style={styles.title}>안녕 나 응애</Text>
          <Image
            source={VerifiedIcon}
            style={{height: 14, borderRadius: 14, marginLeft: 4}}
          />
          <Text style={styles.subTitle}>1일전</Text>
        </View>
        <View style={styles.detailWrapper}>
          <Text style={styles.detailText}>{props.height}cms</Text>
          <Text style={styles.detailText}>·</Text>
          <Text style={styles.detailText}>{props.weight}kg</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => {}} activeOpacity={0.6}>
        <View style={styles.titleButtonWrapper}>
          <Text style={styles.buttonText}>팔로우</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileStrap;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 15.5,
    marginBottom: 23,
  },
  nameWrapper: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#1D232B',
    fontWeight: '700',
    fontSize: 17,
    marginLeft: 5.3,
  },
  subTitle: {
    marginLeft: 4,
    color: '#919EB6',
    fontWeight: '500',
    fontSize: 10,
    lineHeight: 10,
  },
  detailWrapper: {
    flexDirection: 'row',
  },
  detailText: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 12,
    marginLeft: 4,
    marginVertical: 4,
    color: '#919EB6',
  },
  titleButtonWrapper: {
    backgroundColor: '#01B99F',
    borderRadius: 30,
    width: 58,
    height: 24,
  },
  buttonText: {
    paddingHorizontal: 12,
    marginVertical: 6,
    fontSize: 12,
    lineHeight: 12,
    fontWeight: '500',
    color: '#fff',
  },
});
