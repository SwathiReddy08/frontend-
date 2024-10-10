import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Register.css'; 

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://13.211.162.35:5000/api/auth/register', { username, password });
        alert('User registered successfully!');
    };

    return (
        <div className="register-container">
            <nav className="navbar">
            <div className="navbar-brand">
                    <h1 className="website-name">Stay Aware</h1>
                </div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </nav>

            <form onSubmit={handleSubmit} className="register-form">
                <h2>Register</h2>
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;