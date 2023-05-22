import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Dimensions,
} from 'react-native';
import React, {useState, useRef} from 'react';

import {WebView} from 'react-native-webview';

const height = 450;
const width = Dimensions.get('window').width;

const Bookmark = require('../assets/bookmark.png');
const Comments = require('../assets/comment.png');
const Heart = require('../assets/heart.png');
const Dots = require('../assets/dots.png');

const WebViewComponent = (props) => {
  const [message, setMessage] = useState('');
  const webviewRef = useRef();
  const helloWorld = require('../../helloWorld.html');
  const handleMessage = event => {
    const messageFromJS = event.nativeEvent.data;
    setMessage(messageFromJS);
    alert(message);
  };
  const sendToJavaScript = event => {
    alert('React Native!');
  };
  return (
    <View>
      <View style={styles.wrapperWebView}>
        <WebView
          style={{
            width: '100%',
            height: '100%',
          }}
          ref={webviewRef}
          source={helloWorld}
          onMessage={handleMessage}
          javaScriptEnabled
          injectedJavaScript={sendToJavaScript}
        />
      </View>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.ContentWrapper}>
            <Image source={Heart} style={{width: 20, marginHorizontal: 8}} />
            <Text style={styles.text}>{props.likes}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.ContentWrapper}>
            <Image source={Comments} style={{width: 20, marginHorizontal: 8}} />
            <Text style={styles.text}>{props.comments}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.ContentWrapper}>
            <Image source={Bookmark} style={{width: 20, marginHorizontal: 8}} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.ContentWrapper}>
            <Image source={Dots} style={{width: 20, marginHorizontal: 8}} />
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity activeOpacity={0.8} onPress={sendToJavaScript}>
            <View style={styles.buttonWrapper}>
              <Text style={styles.buttonText}>WV Alert</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default WebViewComponent;

const styles = StyleSheet.create({
  wrapperWebView: {
    marginTop: 8,
    height: height,
    width: width,
    backgroundColor: '#EDEEF3',
  },
  wrapper: {
    borderBottomColor: '#F7F8FA',
    borderBottomWidth: 2,
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 22,
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
  buttonWrapper: {
    width: 95,
    height: 30,
    backgroundColor: '#01B99F',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    paddingHorizontal: 12,
    paddingVertical: 9,
    color: 'white',
    fontSize: 12,
    lineHeight: 12,
  },
});
