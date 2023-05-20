import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const title = `지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?`;
const description = `지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아혹시 어떤 상품이 제일 괜찮았어? \n\n후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이 제일 재밌었다던데 맞아??? \n\n올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가 아닌 사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에 있었던 팝들 있으면 어땠는지 후기 좀 공유해주라~~!`;

const Content = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.hashWrapper}>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.hashTag}>
            <Text style={styles.hashText}>#2023</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.hashTag}>
            <Text style={styles.hashText}>#TodayIsMonday</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.hashTag}>
            <Text style={styles.hashText}>#Tops</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.hashTag}>
            <Text style={styles.hashText}>#Pops</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.hashWrapper}>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.hashTag}>
            <Text style={styles.hashText}>#WOW</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.hashTag}>
            <Text style={styles.hashText}>#ROW</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 16,
  },
  title: {
    fontWeight: '700',
    lineHeight: 14,
    fontSize: 14,
    color: '#1D232B',
    marginBottom: 16,
  },
  description: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 12,
    color: '#313B49',
    marginBottom: 16,
  },
  hashWrapper: {
    marginBottom: 8,
    flexDirection: 'row',
  },
  hashTag: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    backgroundColor: '#CED3DE',
    borderRadius: 30,
    marginRight: 8,
  },
  hashText: {
    fontSize: 12,
    lineHeight: 12,
    fontWeight: '500',
    color: '#5A6B87',
  },
});
