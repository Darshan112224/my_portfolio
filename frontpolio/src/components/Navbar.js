// src/components/Navbar.js
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
    <nav className="navbar">
        <div className="nav-container">
            <Link to="/" className="nav-logo">Darshan Patel</Link>
            <div className="nav-links">
                <Link to="/">Home</Link>
                
                <a href="/resume_darshan_patel.pdf" target="_blank" class="resume-link">Resume</a>

            </div>
        </div>
    </nav>
);

export default Navbar;
