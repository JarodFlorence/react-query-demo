import { useQuery } from 'react-query';
import { fetchPosts } from '../api';

export const usePosts = (page: number) => {
  return useQuery(['posts', page], () => fetchPosts(page), {
    keepPreviousData: true, // keep the old data while fetching the new page
  });
};
