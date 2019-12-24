import React, { useEffect } from 'react';
import {Text} from 'react-native';
import database from '../store';

const getPost = () => {
  const postsCollection = database.collections.get('posts');
  return postsCollection;
};

const createPost = async () => {
  const postsCollection = database.collections.get('posts');
  await database.action(async () => {
    const newPost = await postsCollection.create(post => {
      post.title = 'New post';
      post.body = 'Lorem ipsum...';
    });
  });
};

const TestScreen = props => {
  const posts = getPost();
  
  useEffect(() => {
    createPost();
  }, []);

  return (
    <React.Fragment>
      {posts.map(post => {
        return <Text>{post.title}</Text>;
      })}
    </React.Fragment>
  );
};

export default TestScreen;
