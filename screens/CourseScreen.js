import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  PermissionsAndroid,
  Alert,
  Button,
  Linking,
} from 'react-native';
import RenderStudyMaterial from '../components/RenderStudyMaterial';
import {YetToCome} from '../components';

const CourseScreen = ({route}) => {
  const [activeTab, setActiveTab] = useState('notes');
  const {books, notes, PYQs} = route.params;

  const handleTabPress = tabName => {
    setActiveTab(tabName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'notes' && styles.activeTab]}
          onPress={() => handleTabPress('notes')}>
          <Text style={styles.tabText}>Notes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'books' && styles.activeTab]}
          onPress={() => handleTabPress('books')}>
          <Text style={styles.tabText}>Books</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'pyqs' && styles.activeTab]}
          onPress={() => handleTabPress('pyqs')}>
          <Text style={styles.tabText}>PYQs</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        {activeTab === 'notes' &&
          (notes.length > 0 ? (
            <RenderStudyMaterial array={notes} />
          ) : (
            <>
              <YetToCome />
            </>
          ))}

        {activeTab === 'books' &&
          (books.length > 0 ? (
            <RenderStudyMaterial array={books} />
          ) : (
            <>
              <YetToCome />
            </>
          ))}

        {activeTab === 'pyqs' &&
          (PYQs.length > 0 ? (
            <RenderStudyMaterial array={PYQs} />
          ) : (
            <YetToCome />
          ))}
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
