// import React from 'react';
// import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

// const CourseScreen = ({route}) => {
//   const {subjectId, subjects} = route.params;

//   const onPressNotes = () => {
//     console.log('Notes button pressed');
//   };

//   const onPressBooks = () => {
//     console.log('Books button pressed');
//   };

//   const onPressPapers = () => {
//     console.log('Previous year papers button pressed');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>
//         Subject: {subjects.find(subject => subject.id === subjectId)?.name}
//       </Text>
//       <TouchableOpacity style={styles.courseButton} onPress={onPressNotes}>
//         <Text style={styles.courseButtonText}>Notes</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.courseButton} onPress={onPressBooks}>
//         <Text style={styles.courseButtonText}>Books</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.courseButton} onPress={onPressPapers}>
//         <Text style={styles.courseButtonText}>Previous Year Papers</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     // justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: 'black',
//     paddingVertical: 20,
//   },
//   subjectButton: {
//     width: '80%',
//     height: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#E1E1E1',
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   subjectName: {
//     fontSize: 18,
//   },
//   courseButton: {
//     width: '80%',
//     height: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#00BFFF',
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   courseButtonText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
// });

// export default CourseScreen;

import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CourseScreen = () => {
  const [activeTab, setActiveTab] = useState('notes');

  const handleTabPress = tabName => {
    setActiveTab(tabName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'notes' && styles.activeTab]}
          onPress={() => handleTabPress('notes')}
        >
          <Text style={styles.tabText}>Notes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'books' && styles.activeTab]}
          onPress={() => handleTabPress('books')}
        >
          <Text style={styles.tabText}>Books</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'pyqs' && styles.activeTab]}
          onPress={() => handleTabPress('pyqs')}
        >
          <Text style={styles.tabText}>PYQs</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        {activeTab === 'notes' && (
          <View style={styles.content}>
            <Text>Notes content goes here</Text>
          </View>
        )}

        {activeTab === 'books' && (
          <View style={styles.content}>
            <Text>Books content goes here</Text>
          </View>
        )}

        {activeTab === 'pyqs' && (
          <View style={styles.content}>
            <Text>PYQs content goes here</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#CCCCCC',
  },
  activeTab: {
    borderBottomColor: '#000000',
    backgroundColor: '#9ec0f7',
    color: 'white',
    borderTopEndRadius: 15,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CourseScreen;
