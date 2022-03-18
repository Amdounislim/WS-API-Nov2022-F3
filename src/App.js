import { Route, Routes } from 'react-router-dom';
import './App.css';
import Comments from './Components/Comments';
import Profile from './Components/Profile/Profile';
import Users from './Components/Users';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/user/:id" element={<Profile />} />
        <Route path="/posts/:id" element={<Comments />} />
      </Routes>

    </div>
  );
}

export default App;
