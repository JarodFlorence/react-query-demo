import { useInfiniteQuery } from 'react-query';
import { fetchPosts } from '../api';

export const useInfinitePosts = (userId: number) => {
    return useInfiniteQuery(['posts', userId], ({ pageParam = 1 }) => fetchPosts(pageParam), {
      getNextPageParam: (lastPage, allPages) => lastPage.nextPage ?? false,
    });
};  
