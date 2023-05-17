import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Plus} from 'react-native-feather';
import {RenderQuestions, RenderMyQuestions, Footer, QuestionModal} from '../components';
import questions from '../data/question'
import { act } from 'react-test-renderer';

const Discussion = () => {
  const [activeTab, setActiveTab] = useState('discussion');
  const [activeModal, setActiveModal] = useState(false)
  const toggleMenu = () => {
    setActiveModal(!activeModal)
  }

  const handlePostQuestion = (question) => {
    // Handle posting the question
    console.log('Question:', question);
  };
  
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
          toggleMenu();
        }}
      >
        <Plus height={16} width={16} color="black" />
      </TouchableOpacity>
      <Footer active={'discussion'} />

      {/* Modal */}
      {activeModal &&
        <QuestionModal
        visible={activeModal}
        onClose={() => setActiveModal(false)}
        onPost={handlePostQuestion}
      />}
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
