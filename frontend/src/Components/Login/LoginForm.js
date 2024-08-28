import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAnimate(true); // Start the animation when the component mounts
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(''); // Clear the error message when the user starts typing
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(''); // Clear the error message when the user starts typing
  };

  const validate = () => {
    let isValid = true;

    // Regex pattern for validating email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    }

    // Regex pattern for validating password
    const passwordPattern =
      /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

    if (!passwordPattern.test(password)) {
      setPasswordError(
        'Password must be at least 6 characters long, contain one capital letter, and one special character.'
      );
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return; // Stop submission if validation fails
    }

    // Here you can add your login logic
    console.log('Email:', email);
    console.log('Password:', password);

    navigate('/'); // Redirect to home or other pages after login
  };

  const handleCreateAccount = () => {
    navigate('/Volunteer-Form'); // Navigate to the volunteer form page
  };

  return (
    <div className={`login-container ${animate ? 'fadeInUp' : ''}`}>
      <div id="login-form">
        <h1 className="fadeInUp fadeInUpDelayed1">Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="fadeInUp fadeInUpDelayed2">
            Email address:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email address"
            required
            className="fadeInUp fadeInUpDelayed2"
          />
          {emailError && (
            <p className="error fadeInUp fadeInUpDelayed2">{emailError}</p>
          )}
          <label htmlFor="password" className="fadeInUp fadeInUpDelayed3">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
            required
            className="fadeInUp fadeInUpDelayed3"
          />
          {passwordError && (
            <p className="error fadeInUp fadeInUpDelayed3">{passwordError}</p>
          )}
          <div className="forgot-password fadeInUp fadeInUpDelayed4">
            <a href="/">Forgot your password?</a>
          </div>
          <input
            type="submit"
            value="Sign in"
            className="fadeInUp fadeInUpDelayed5"
          />
        </form>
        <div className="signup-link fadeInUp fadeInUpDelayed5">
          Don’t have an account?{' '}
          <a href="/Volunteer-Form" onClick={handleCreateAccount}>
            Create Account
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
