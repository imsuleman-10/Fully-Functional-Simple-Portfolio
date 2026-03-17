import React, { useState } from 'react';

const AdminLogin = ({ onLoginSuccess, onBack }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Hardcoded credentials
    if (email === 'sam@gmail.com' && password === '1234') {
      localStorage.setItem('adminLoggedIn', 'true');
      onLoginSuccess();
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <section className="login-section">
      <div className="login-container">
        <h2>Admin Login</h2>
        <p className="login-subtitle">Sign in to access the dashboard</p>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <div className="login-error">{error}</div>}
          <button type="submit" className="btn btn-primary">Sign In</button>
          <button type="button" onClick={onBack} className="btn btn-secondary">Back to Portfolio</button>
        </form>
      </div>
    </section>
  );
};

export default AdminLogin;
