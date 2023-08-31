import { usePosts } from '../hooks/usePosts';
import Post from './Post';

type PostProps = {
    id: number;
    title: string;
    body: string;
};

const PostList: React.FC = () => {
    const userId = 1; // This can be dynamic based on your app's requirements
    const { data: posts, isLoading, isError } = usePosts(userId);
  
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error fetching posts</p>;
  
    return (
      <div>
        {posts?.map((post: PostProps) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    );
  };

export default PostList;
