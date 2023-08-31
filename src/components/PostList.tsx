import { usePosts } from '../hooks/usePosts';
import Post from './Post';

const PostList: React.FC = () => {
  const { data: posts, isLoading, isError } = usePosts();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching posts</p>;

  return (
    <div>
      {posts?.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostList;
