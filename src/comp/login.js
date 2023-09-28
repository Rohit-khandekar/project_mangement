import React, { useState } from 'react';
import './Login.css';
import { Client, Account } from 'appwrite';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const navigate = useNavigate(); // Initialize navigate

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  }

  const validatePassword = (value) => {
    return value.length >= 6;
  }

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setErrors(prevErrors => ({ ...prevErrors, email: validateEmail(value) ? '' : 'Invalid email address' }));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setErrors(prevErrors => ({ ...prevErrors, password: validatePassword(value) ? '' : 'Password must be at least 6 characters long' }));
  };

  const handleSubmission = async (e) => {
    e.preventDefault(); // Prevent form submission
  
    const client = new Client();
    const account = new Account(client);
  
    client
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("651525be318d3396ab36");
  
    const emailValid = validateEmail(email);
    const passwordValid = validatePassword(password);
  
    setErrors({
      email: emailValid ? '' : 'Invalid email address',
      password: passwordValid ? '' : 'Password must be at least 6 characters long'
    });
  
    if (emailValid && passwordValid) {
      try {
        const promise = account.createEmailSession(email, password);
  
        promise.then(function (response) {
          console.log("Success", response); // Success
          navigate("/home");
        }, function (error) {
          console.log(error); // Failure
          console.error("Invalid credentials. Please check your inputs.");
          setErrors(prevErrors => ({
            ...prevErrors,
            email: 'Invalid email or password',
            password: 'Invalid email or password'
          }));
        });
  
        console.log("Appwrite is connected");
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  return (
    <div className="login-container-body">
      <div className="login-container">
        <div className="background-image">
          <div className="login-content">
            <h1>Login</h1>
            <div className="form-container">
              <form>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input-field"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <div className="password-input-container">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      className="input-field"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    {errors.password && <span className="error-message">{errors.password}</span>}
                    <div
                      className="password-toggle"
                      onClick={handleTogglePassword}
                    >
                      👁️
                    </div>
                  </div>
                </div>
                <div className="forgot-password">
                  <a href="#">Forgot Password?</a>
                </div>
                <div className="login-button">
                  <button type="submit" onClick={handleSubmission} className="login-btn">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
