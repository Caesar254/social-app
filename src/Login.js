import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css'

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Fetch user data from the JSON Placeholder API
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []); 
  const handleLogin = () => {
    // Check if the entered username or email and password match a user from the API
    const foundUser = users.find(user => (user.username === usernameOrEmail || user.email === usernameOrEmail) && user.address.zipcode === zipCode);

    if (foundUser) {
      setErrorMessage('');
      setSuccessMessage('Login successful!');
      setIsLoggedIn(true);
      navigate('/logged'); 
    } else {
      setErrorMessage('Invalid username/email or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div>
        <label htmlFor="usernameOrEmail">Username/Email:</label>
        <input
          type="text"
          id="usernameOrEmail"
          value={usernameOrEmail}
          onChange={(e) => setUsernameOrEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="zipCode">Password</label>
        <input
          type="password"
          id="zipCode"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      {errorMessage && <p className="error">{errorMessage}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
      {isLoggedIn && <p className="success">Login successful!</p>}
    </div>
  );
};

export default Login;
