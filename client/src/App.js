import React, { useState, useEffect,useParams} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Main';
import Login from './pages/Entrance'
import RegisterPage from './pages/Register'
import ProfilPage from './pages/Profile'
import ProfileEditPage from './pages/ProfileEdit'


function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Homepage />} /> 
      <Route path="/login-page" element={<Login />} /> 
      <Route path="/register" element={<RegisterPage />} /> 
      <Route path="/profile" element={<ProfilPage />} /> 
      <Route path="/profile-edit" element={<ProfileEditPage />} /> 
      {users.map((user) =>
        <Route path={`/user/${user._id}`} element={<ProfilPage id={user._id} />} />)}
 
    </Routes>
  </Router>
  );
}

export default App;
