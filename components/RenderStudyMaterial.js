import {StyleSheet, Text, View, FlatList, Alert} from 'react-native';
import React from 'react';
import RoadmapCard from './RoadmapCard';
import RNFetchBlob from 'rn-fetch-blob';

const RenderStudyMaterial = ({array}) => {
  const downloadFile = url => {
    const {config, fs} = RNFetchBlob;
    const fileDir = fs.dirs.DownloadDir;
    const date = new Date();
    config({
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path:
          fileDir +
          '/AcademicAllies/' +
          Math.floor(date.getDate() + date.getSeconds() / 2) +
          '.mp4',
        description: 'File downloaded successfully',
      },
    })
      .fetch('GET', url, {})
      .then(res => {
        Alert.alert('file Downloaded successfully');
        console.log('The file saved to ', res.path());
      });
  };

  const renderCard = ({item}) => (
    <RoadmapCard item={item} downloadFile={downloadFile} />
  );

  return (
    <View>
      <FlatList
        data={array}
        renderItem={renderCard}
        keyExtractor={array => array.id}
        style={styles.roadmapItem}
      />
    </View>
  );
};

export default RenderStudyMaterial;

const styles = StyleSheet.create({});
