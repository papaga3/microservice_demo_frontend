import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import CreatePost from './components/CreatePost';
import './App.css';
import PostDisplay from './components/PostDisplay';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <CreatePost />
        <PostDisplay />
      </div>
    </QueryClientProvider>
  );
}

export default App;
