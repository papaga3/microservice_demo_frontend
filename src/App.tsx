import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import CreatePost from '@components/CreatePost';
import PostDisplay from '@components/PostDisplay';

import './App.css';

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
