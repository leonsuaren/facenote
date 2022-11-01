import './App.css';
import { PostContextProvider } from './context/post-context';

import { Home } from '../src/views/home';

function App() {
  return (
    <PostContextProvider>
      <Home />
    </PostContextProvider>
  );
}

export default App;
