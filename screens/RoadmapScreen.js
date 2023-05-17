import React from 'react';
import {View, Text, TouchableOpacity, Linking, FlatList} from 'react-native';
import RoadmapCard from '../components/RoadmapCard';

const RoadmapScreen = ({route}) => {
  const {title, roadmap} = route.params;
  // console.log(roadmap);
  // console.log(title);
  const handleVideoClick = videoLink => {
    Linking.openURL(videoLink);
  };

  const renderRoadmapCard = ({item}) => (
    <RoadmapCard item={item} downloadFile={handleVideoClick} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.courseName}>{title}</Text>

      <FlatList
        data={roadmap}
        renderItem={renderRoadmapCard}
        keyExtractor={item => item.id}
        style={styles.roadmapItem}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  courseName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
};

export default RoadmapScreen;
