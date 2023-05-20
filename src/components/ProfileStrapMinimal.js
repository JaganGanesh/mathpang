import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const ProfilePicture = require('../assets/profilePicture.png');
const VerifiedIcon = require('../assets/verified.png');
const Dots = require('../assets/dots.png');

const ProfileStrapMinimal = props => {
  return (
    <View
      style={[styles.wrapper, {marginLeft: props.subComment ? 58.77 : 15.5}]}>
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
          <Text style={styles.title}>{props.name}</Text>
          {props.verified ? (
            <Image
              source={VerifiedIcon}
              style={{height: 14, borderRadius: 14, marginLeft: 4}}
            />
          ) : (
            <></>
          )}
          <Text style={styles.subTitle}>1일전</Text>
        </View>
      </View>
      <View style={{justifyContent: 'flex-start', alignItems: 'flex-start'}}>
        <TouchableOpacity onPress={() => {}} activeOpacity={0.6}>
          <Image source={Dots} style={{}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileStrapMinimal;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 15.5,
    marginBottom: 23,
    marginTop: 12,
    alignItems: 'center',
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
