import { useQuery } from 'react-query';
import { fetchPosts } from '../api';

export const usePosts = (page: number) => {
    return useQuery('posts', () => fetchPosts(page), {
        refetchOnWindowFocus: true, // refetch when window is focused
        refetchInterval: 1000 * 60 * 5, // refetch every 5 minutes
    });
};
