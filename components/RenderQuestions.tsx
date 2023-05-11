import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import QuestionContainer from './QuestionContainer';

const renderQuestions = ({questions}) => {
  const renderItems = item => {
    return <QuestionContainer question={item} />;
  };

  return (
    <FlatList
      data={questions}
      renderItem={renderItems}
      keyExtractor={question => question.id.toString()}
    />
  );
};

export default renderQuestions;

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
