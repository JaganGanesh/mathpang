import {ScrollView, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';

// Components
import Header from './src/components/Header';
import ProfileStrap from './src/components/ProfileStrap';
import Content from './src/components/Content';
import WebViewComponent from './src/components/WebViewComponent';
import ProfileStrapMinimal from './src/components/ProfileStrapMinimal';
import CommentContent from './src/components/CommentContent';
import InputComponent from './src/components/InputComponent';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <ProfileStrap height={165} weight={53} />
        <Content />
        <WebViewComponent likes={5} comments={5} />
        <ProfileStrapMinimal verified name={`안녕 나 응애`} />
        <CommentContent
          content={
            '어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니꼭 봐주세용~!'
          }
          likes={5}
          comments={5}
        />
        <ProfileStrapMinimal subComment name={`ㅇㅅㅇ`} />
        <CommentContent
          subComment
          content={`오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다`}
          likes={5}
        />
        <InputComponent />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
