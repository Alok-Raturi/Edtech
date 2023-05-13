import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Footer} from '../components';
import courses from '../data/data';

const subjects = courses;

const StudyMaterial = ({navigation}) => {
  const onPressSubject = subjectId => {
    navigation.navigate('CourseScreen', {subjectId, subjects});
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Find Quality Content For CSE Students</Text>
      {subjects.map(subject => (
        <TouchableOpacity
          key={subject.id}
          style={styles.subjectButton}
          onPress={() => onPressSubject(subject.id)}
        >
          <Text style={styles.subjectName}>{subject.title}</Text>
        </TouchableOpacity>
      ))}
      <Footer active={'study'} />
    </SafeAreaView>
  );
};

// export default StudyMaterial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
    textAlign: 'center',
    paddingVertical: 20,
  },
  subjectButton: {
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bdd4e7',
    borderRadius: 10,
    marginBottom: 10,
  },
  subjectName: {
    fontSize: 18,
    color: 'black',
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

export default StudyMaterial;
