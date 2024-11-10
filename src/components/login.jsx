import './login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }

    try {
      // const result = await axios.post('http://localhost:3000/api/auth/login', {
      const result = await axios.post('https://geogaurd-backend.onrender.com/api/auth/login', {
        email,
        password,
      });
      console.log(result);
      sessionStorage.setItem('token', result.data.authtoken);
      setEmail('');
      setPassword('');
      navigate('/');
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data) {
        setError(err.response.data.error || 'Failed to Login. Please try again.');
      } else {
        setError('Failed to Login. Please try again.');
      }
    }
  };

  return (
    <>
      <div className="login-main">
        <form action="" method="post" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className={error ? 'input-error' : ''}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              value={password}
              onChange={handlePasswordChange}
              className={error ? 'input-error' : ''}
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}
