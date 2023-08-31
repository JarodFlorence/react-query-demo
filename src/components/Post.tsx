type PostProps = {
    id: number;
    title: string;
    body: string;
  };
  
  const Post: React.FC<PostProps> = ({ id, title, body }) => {
    return (
      <div key={id}>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    );
  };
  
  export default Post;
  