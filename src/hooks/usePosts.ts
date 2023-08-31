import { useQuery } from 'react-query';
import { fetchPosts } from '../api';

export const usePosts = () => {
  return useQuery('posts', fetchPosts);
};
