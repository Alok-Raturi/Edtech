import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import CourseCard from './CourseCard';
import courses from '../data/data';

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
    marginBottom:70
  },
});

export default CourseContainer;
