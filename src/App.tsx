import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import CreatePost from './components/CreatePost';
import './App.css';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <CreatePost />
      </div>
    </QueryClientProvider>
  );
}

export default App;
