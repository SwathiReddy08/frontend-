import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import CampaignSlider from './Slider'; 

const Home = ({ isLoggedIn, handleLogout }) => {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-brand">
                    <h1 className="website-name">Stay Aware</h1> 
                </div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    {!isLoggedIn ? (
                        <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </>
                    ) : (
                        <li><button className="logout-button" onClick={handleLogout}>Logout</button></li>
                    )}
                </ul>
            </nav>

            <CampaignSlider />

            <section className="hero-section">
                <div className="hero-content">
                    <h1>Join Us in Making a Difference</h1>
                    <p>Raise awareness, connect with others, and foster positive change.</p>
                    <div className="hero-buttons">
                        <Link to="/register" className="cta-button">Get Involved</Link>
                        <Link to="/causes" className="cta-button">Explore Causes</Link>
                    </div>
                </div>
            </section>

            <section className="featured-causes">
                <h2>Explore Our Featured Causes</h2>
                <div className="causes-grid">
                    <div className="cause-card">
                        <img src="https://www.verywellmind.com/thmb/S9_JXKoBxUTY_S7Eo3S4odeBtwA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/social-anxiety-disorder-causes-3024749-5c3b8f7bc9e77c0001bffa28.png" alt="Cause 1" />
                        <h3>Cause Title 1</h3>
                        <p>Brief description of the cause.</p>
                        <Link to="/cause-detail" className="learn-more-button">Learn More</Link>
                    </div>
                    <div className="cause-card">
                        <img src="https://www.verywellmind.com/thmb/S9_JXKoBxUTY_S7Eo3S4odeBtwA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/social-anxiety-disorder-causes-3024749-5c3b8f7bc9e77c0001bffa28.png" alt="Cause 2" />
                        <h3>Cause Title 2</h3>
                        <p>Brief description of the cause.</p>
                        <Link to="/cause-detail" className="learn-more-button">Learn More</Link>
                    </div>
                    <div className="cause-card">
                        <img src="https://www.verywellmind.com/thmb/S9_JXKoBxUTY_S7Eo3S4odeBtwA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/social-anxiety-disorder-causes-3024749-5c3b8f7bc9e77c0001bffa28.png" alt="Cause 3" />
                        <h3>Cause Title 3</h3>
                        <p>Brief description of the cause.</p>
                        <Link to="/cause-detail" className="learn-more-button">Learn More</Link>
                    </div>
                    <div className="cause-card">
                        <img src="https://www.verywellmind.com/thmb/S9_JXKoBxUTY_S7Eo3S4odeBtwA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/social-anxiety-disorder-causes-3024749-5c3b8f7bc9e77c0001bffa28.png" alt="Cause 4" />
                        <h3>Cause Title 4</h3>
                        <p>Brief description of the cause.</p>
                        <Link to="/cause-detail" className="learn-more-button">Learn More</Link>
                    </div>
                </div>
            </section>

            <section className="community-spotlight">
                <h2>Community Stories</h2>
                <CampaignSlider />
                <Link to="/share-story" className="share-story-button">Share Your Story</Link>
            </section>

            <section className="upcoming-events">
                <h2>Upcoming Events</h2>
                <div className="events-list">
                    <div className="event-item">
                        <h3>Event Title 1</h3>
                        <p>Date and Time: 01 Jan 2025, 10:00 AM</p>
                        <p>Brief description of the event.</p>
                        <Link to="/event-detail" className="join-event-button">Join Event</Link>
                    </div>
                    <div className="event-item">
                        <h3>Event Title 2</h3>
                        <p>Date and Time: 05 Feb 2025, 2:00 PM</p>
                        <p>Brief description of the event.</p>
                        <Link to="/event-detail" className="join-event-button">Join Event</Link>
                    </div>
                    <div className="event-item">
                        <h3>Event Title 3</h3>
                        <p>Date and Time: 15 Mar 2025, 1:00 PM</p>
                        <p>Brief description of the event.</p>
                        <Link to="/event-detail" className="join-event-button">Join Event</Link>
                    </div>
                </div>
            </section>

            <section className="discussion-forum">
                <h2>Join the Conversation</h2>
                <div className="forum-list">
                    <div className="forum-item">
                        <h3>Discussion Topic 1</h3>
                        <p>Replies: 10</p>
                        <p>Last Active: 20 Dec 2024</p>
                        <Link to="/forum-detail" className="view-discussion-button">View Discussion</Link>
                    </div>
                    <div className="forum-item">
                        <h3>Discussion Topic 2</h3>
                        <p>Replies: 5</p>
                        <p>Last Active: 18 Dec 2024</p>
                        <Link to="/forum-detail" className="view-discussion-button">View Discussion</Link>
                    </div>
                    <div className="forum-item">
                        <h3>Discussion Topic 3</h3>
                        <p>Replies: 8</p>
                        <p>Last Active: 15 Dec 2024</p>
                        <Link to="/forum-detail" className="view-discussion-button">View Discussion</Link>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                        <li><Link to="/terms">Terms of Service</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="social-media">
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href="https://facebook.com">Facebook</a></li>
                        <li><a href="https://twitter.com">Twitter</a></li>
                        <li><a href="https://instagram.com">Instagram</a></li>
                        <li><a href="https://linkedin.com">LinkedIn</a></li>
                    </ul>
                </div>
                <div className="newsletter">
                    <h3>Stay Updated on Social Causes</h3>
                    <input type="email" placeholder="Enter your email" />
                    <button>Subscribe</button>
                </div>
            </footer>
        </div>
    );
};

export default Home;