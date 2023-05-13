import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Send, Wind} from 'react-native-feather';

const AnswerScreen = ({route}) => {
  const {Answers, Body, Title} = route.params;
  const [answers, setAnswers] = useState(Answers);
  const [newAnswer, setNewAnswer] = useState('');

  const addAnswer = () => {
    if (answers !== '') {
      const answer = {
        id: answers.length + 1,
        user: 'You', // Assuming the user is the one adding the answer
        body: newAnswer,
      };
      setAnswers([...answers, answer]);
      setNewAnswer('');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.heading}>{Title}</Text>
        <Text style={styles.subHeading}>Description :</Text>
        <Text style={styles.questionBody}>{Body}</Text>

        <Text style={styles.subHeading}>Answers :</Text>
        {answers.map(answer => (
          <View key={answer.id} style={styles.answerCard}>
            <Text style={styles.answerText}>{answer.body}</Text>
            <Text style={styles.author}>Author: {answer.user}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newAnswer}
          onChangeText={text => setNewAnswer(text)}
          placeholder="Type your answer here..."
          placeholderTextColor={'black'}
        />
        <Send
          stroke="red"
          fill="#fff"
          width={40}
          height={40}
          onPress={addAnswer}
          style={styles.send}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#faf7f0',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
  },
  subHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    color: 'black',
  },
  questionBody: {
    fontSize: 16,
    marginBottom: 16,
    color: 'black',
  },
  answerCard: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  answerText: {
    fontSize: 16,
    color: 'black',
  },
  author: {
    marginTop: 8,
    fontStyle: 'italic',
    color: 'black',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 8,
    paddingHorizontal: 8,
    color: 'black',
    width: '85%',
  },
  send: {
    backgroundColor: 'black',
    borderRadius: 20,
  },
});

export default AnswerScreen;
