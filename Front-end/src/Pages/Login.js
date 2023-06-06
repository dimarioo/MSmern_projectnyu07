import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', { email, password });
      console.log(response.data);
      
    } catch (error) {
      console.error(error);
      
    }
  };

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <form onSubmit={handleLogin}>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Password</label>
            <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
