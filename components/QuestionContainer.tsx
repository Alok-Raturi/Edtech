import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {MessageCircle} from 'react-native-feather';
import {useNavigation} from '@react-navigation/native';

const QuestionContainer = ({question}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      key={question.id}
      style={styles.questionContainer}
      // onPress={() => {
      //   navigation.navigate('Answers', {
      //     questionId: question.item.id,
      //   });
      // }}
    >
      <Text style={styles.questionTitle}>{question.item.title}</Text>
      <Text style={styles.questionBody}>{question.item.body}</Text>
      <View style={styles.questionFooter}>
        <Text style={styles.questionUser}>{question.item.user}</Text>
        <MessageCircle height={16} width={16} fill="black" />
        <Text style={styles.questionAnswers}>
          {question.item.answers.length}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default QuestionContainer;

const styles = StyleSheet.create({
  questionContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
  },
  questionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
    color: 'black',
  },
  questionBody: {
    fontSize: 14,
    marginBottom: 8,
  },
  questionFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  questionUser: {
    flex: 1,
    fontSize: 12,
    color: 'gray',
    color: 'black',
  },
  questionAnswers: {
    fontSize: 12,
    // color: 'gray',
    color: 'black',
    marginLeft: 4,
  },
});
