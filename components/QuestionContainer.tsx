import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {MessageCircle} from 'react-native-feather';

const QuestionContainer = ({question}) => {
  return (
    <>
      <Text style={styles.questionTitle}>{question.title}</Text>
      <Text style={styles.questionBody}>{question.body}</Text>
      <View style={styles.questionFooter}>
        <Text style={styles.questionUser}>{question.user}</Text>
        <MessageCircle height={16} width={16} fill="black" />
        <Text style={styles.questionAnswers}>{question.answers.length}</Text>
      </View>
    </>
  );
};

export default QuestionContainer;

const styles = StyleSheet.create({
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
