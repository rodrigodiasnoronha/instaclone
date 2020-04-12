import React, { memo } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Post, Author } from '../../types';

interface Props {
  data: Post;
  author: Author;
}

const PostComponent: React.FC<Props> = ({ data, author }) => (
  <View>
    <View style={styles.header}>
      <Image source={{ uri: author.avatar }} style={styles.avatar} />
      <Text style={styles.username}>{author.name}</Text>
    </View>
    <Image
      source={{ uri: data.image }}
      style={styles.postImage && { aspectRatio: data.aspectRatio }}
    />

    <Text style={styles.description}>
      <Text>{author.name}</Text>
      {data.description}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  username: {
    color: '#333',
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
  },
  description: {
    padding: 15,
    lineHeight: 18,
  },
});

export default memo(PostComponent);
