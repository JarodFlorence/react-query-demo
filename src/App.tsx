import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PostList from './components/PostList';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Posts</h1>
        <PostList />
      </div>
    </QueryClientProvider>
  );
};

export default App;
