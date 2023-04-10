import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const CourseScreen = ({route}) => {
  const {subjectId, subjects} = route.params;

  const onPressNotes = () => {
    console.log('Notes button pressed');
  };

  const onPressBooks = () => {
    console.log('Books button pressed');
  };

  const onPressPapers = () => {
    console.log('Previous year papers button pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Subject: {subjects.find(subject => subject.id === subjectId)?.name}
      </Text>
      <TouchableOpacity style={styles.courseButton} onPress={onPressNotes}>
        <Text style={styles.courseButtonText}>Notes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.courseButton} onPress={onPressBooks}>
        <Text style={styles.courseButtonText}>Books</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.courseButton} onPress={onPressPapers}>
        <Text style={styles.courseButtonText}>Previous Year Papers</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
    paddingVertical: 20,
  },
  subjectButton: {
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E1E1E1',
    borderRadius: 10,
    marginBottom: 10,
  },
  subjectName: {
    fontSize: 18,
  },
  courseButton: {
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00BFFF',
    borderRadius: 10,
    marginBottom: 10,
  },
  courseButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default CourseScreen;
