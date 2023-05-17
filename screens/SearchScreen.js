import React, {useState} from 'react';
import {View, Text, TextInput, FlatList, StyleSheet} from 'react-native';
import CourseCard from '../components/CourseCard';
import courses from '../data/data';

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
        data={searchText !== '' ? searchResults : []}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default SearchScreen;
