import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
    const [token, setToken] = useState('');

    const handleLogout = () => {
        // Clear the token or perform any necessary logout actions
        setToken('');
    };

    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" exact element={<Home isLoggedIn={!!token} handleLogout={handleLogout} />} />
                    <Route path="/login" element={<Login setToken={setToken} />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;