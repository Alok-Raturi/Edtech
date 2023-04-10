import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Plus} from 'react-native-feather';
import {RenderQuestions, RenderMyQuestions, Footer} from '../components';

const questions = [
  {
    id: 1,
    user: 'You',
    title: 'How do I use React Navigation?',
    body:
      'I am having trouble setting up the Stack Navigator. Can someone provide guidance?',
    answers: [
      {
        id: 1,
        user: 'John Doe',
        body:
          'You can check the React Navigation documentation for detailed instructions.',
      },
      {
        id: 2,
        user: 'Jane Smith',
        body: 'You can also watch some video tutorials on YouTube.',
      },
    ],
  },
  {
    id: 2,
    user: 'John Doe',
    title: 'What is the difference between state and props in React?',
    body:
      'I am confused about when to use state and when to use props. Can someone explain?',
    answers: [
      {
        id: 1,
        user: 'Jane Smith',
        body:
          'State is used to manage internal component state, while props are used to pass data from parent to child components.',
      },
      {
        id: 2,
        user: 'You',
        body:
          'Additionally, state can be updated using setState(), while props are read-only.',
      },
    ],
  },
];

const Discussion = () => {
  const [activeTab, setActiveTab] = useState('discussion');

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'discussion' && styles.activeTab]}
          onPress={() => setActiveTab('discussion')}
        >
          <Text style={styles.tabText}>Discussion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'my-questions' && styles.activeTab]}
          onPress={() => setActiveTab('my-questions')}
        >
          <Text style={styles.tabText}>My Questions</Text>
        </TouchableOpacity>
      </View>
      {activeTab === 'discussion' ? (
        <RenderQuestions questions={questions} />
      ) : (
        <RenderMyQuestions questions={questions} />
      )}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => {
          // Navigate to the ask question screen
        }}
      >
        <Plus height={16} width={16} color="black" />
      </TouchableOpacity>
      <Footer active={'discussion'} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 2,
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  tabText: {
    fontWeight: 'bold',
    color: 'black',
  },
  activeTab: {
    borderBottomColor: 'orange',
    borderBottomWidth: 2,
  },
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
  floatingButton: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    backgroundColor: 'orange',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
});

export default Discussion;
