import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostList from './pages/PostList';
import PostDetails from './pages/PostDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/post" element={<PostList />} />
        <Route path="/dados/:id" element={<PostDetails />} />
      </Routes>
    </Router>
  );
}

export default App;