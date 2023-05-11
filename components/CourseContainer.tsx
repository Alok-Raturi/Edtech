import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import CourseCard from './CourseCard';

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

const CourseContainer = () => {
  const renderCourseCard = ({item}) => <CourseCard item={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Courses</Text>
      <FlatList
        data={courses}
        renderItem={renderCourseCard}
        keyExtractor={item => item.id}
        style={styles.courseList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -2,
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  courseList: {
    width: '100%',
    paddingHorizontal: 20,
  },
});

export default CourseContainer;
