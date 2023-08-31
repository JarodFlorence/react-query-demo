import { useMutation, useQueryClient } from 'react-query';
import { createPost } from '../api';

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts'); // refetch posts after a new post is created
    },
  });
};
