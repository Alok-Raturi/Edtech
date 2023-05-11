import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const RoadmapCard = ({handleVideoClick, item}) => {
  return (
    <TouchableOpacity
      style={styles.roadmapItem}
      onPress={() => handleVideoClick(item.value)}
    >
      <Text style={styles.itemText}>{item.key}</Text>
    </TouchableOpacity>
  );
};

export default RoadmapCard;

const styles = StyleSheet.create({
  itemText: {
    fontSize: 16,
    color: 'black',
  },
  roadmapItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#b3a5a4',
    borderRadius: 5,
    width: '100%',
    color: 'black',
  },
});
