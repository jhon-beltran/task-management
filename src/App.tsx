import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Projects from './pages/Projects';
import Tasks from './pages/Tasks';

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tasks/:projectId" element={<Tasks />} />
      </Routes>
    </Router>
  );
}

export default App;
