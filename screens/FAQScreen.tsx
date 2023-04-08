import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';

const faqs = [
  {
    question: 'What is [your app name]?',
    answer:
      '[Your app name] is an edtech application designed to help students learn and teachers teach in a more effective way.',
  },
  {
    question: 'What kind of courses does [your app name] offer?',
    answer:
      '[Your app name] offers a wide range of courses in various subjects such as Mathematics, Science, History, and English.',
  },
  // Add more FAQs here
];

const FAQScreen = () => {
  const renderItem = ({item}) => (
    <View style={styles.faqItem}>
      <Text style={styles.question}>{item.question}</Text>
      <Text style={styles.answer}>{item.answer}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Frequently Asked Questions (FAQ)</Text>
      <FlatList
        data={faqs}
        renderItem={renderItem}
        keyExtractor={item => item.question}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'black',
  },
  faqItem: {
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'red',
  },
  answer: {
    fontSize: 16,
    color: 'black',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 10,
    borderBottomColor: 'red',
    borderBottomWidth: 2,
  },
});

export default FAQScreen;
