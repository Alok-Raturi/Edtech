import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import QuestionContainer from './QuestionContainer';

const RenderMyQuestions = ({questions}) => (
  <ScrollView>
    {questions
      .filter(question => question.user === 'You')
      .map(question => (
        <TouchableOpacity
          key={question.id}
          style={styles.questionContainer}
          onPress={() => {
            // Navigate to the question details screen
          }}
        >
          <QuestionContainer question={question} />
        </TouchableOpacity>
      ))}
  </ScrollView>
);

export default RenderMyQuestions;

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
