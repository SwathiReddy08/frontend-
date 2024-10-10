import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file for styling

const Login = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(''); 

        console.log('Submitting form...');

        try {
            const response = await axios.post('http://13.211.162.35:5000/api/auth/login', { username, password });
            console.log('Response:', response);
            setToken(response.data.token);
            navigate('/'); 
        } catch (error) {
            console.error('Error during login:', error);
            if (error.response) {
                setErrorMessage(error.response.data.message || 'Login failed. Please try again.');
            } else if (error.request) {
                setErrorMessage('No response from server. Please check your connection.');
            } else {
                setErrorMessage('Error: ' + error.message);
            }
        }
    };

    return (
        <div className="login-container">
            <nav className="navbar">
            <div className="navbar-brand">
                    <h1 className="website-name">Stay Aware</h1> {/* Website Name */}
                </div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </nav>

            <form onSubmit={handleSubmit} className="login-form">
                <h2>Login</h2>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;