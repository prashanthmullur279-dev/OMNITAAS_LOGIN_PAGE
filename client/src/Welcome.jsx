import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('username');
    navigate('/');
  };

  return (
    <div className="welcome-container">
      <h2>Welcome, {username}! 👋</h2>
      <p>You have successfully logged in.</p>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Welcome;