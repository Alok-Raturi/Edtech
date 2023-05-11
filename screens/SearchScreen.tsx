import React, {useState} from 'react';
import {View, Text, TextInput, FlatList, StyleSheet} from 'react-native';
import CourseCard from '../components/CourseCard';

const courses = [
  {
    id: '1',
    title: 'Introduction to Programming',
    description: 'Learn the basics of programming with Python',
    roadmap: 'Guided roadmap for Introduction to Programming',
  },
  {
    id: '2',
    title: 'Web Development',
    description:
      'Learn to build web applications with HTML, CSS, and JavaScript',
    roadmap: 'Guided roadmap for Web Development',
  },
  {
    id: '3',
    title: 'Data Science',
    description: 'Learn to analyze data and make predictions using Python',
    roadmap: [
      {
        id: 1,
        key: 'Introduction to Programming Concepts',
        value: 'https://www.youtube.com/watch?v=qz0aGYrrlhU',
      },
      {
        id: 2,
        key: 'Conditional Statements and Loops',
        value: 'https://www.youtube.com/watch?v=6iF8Xb7Z3wQ',
      },
      {
        id: 3,
        key: 'Functions and Modules',
        value: 'https://www.youtube.com/watch?v=9Os0o3wzS_I',
      },
      {
        id: 4,
        key: 'Arrays and Lists:',
        value: 'https://www.youtube.com/watch?v=gG3Ju6spdJ4',
      },
    ],
  },
  {
    id: '4',
    title: 'Mobile App Development',
    description:
      'Learn to build mobile applications for iOS and Android with React Native',
    roadmap: 'Guided roadmap for Mobile App Development',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    color: 'black',
  },
  itemContainer: {
    padding: 16,
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  itemDescription: {
    marginTop: 8,
  },
});

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = text => {
    const results = courses.filter(course =>
      course.title.toLowerCase().includes(text.toLowerCase()),
    );
    setSearchText(text);
    setSearchResults(results);
  };

  const renderItem = ({item}) => <CourseCard item={item} />;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleSearch}
        value={searchText}
        placeholder="Search for a course"
        placeholderTextColor={'black'}
      />
      <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default SearchScreen;
