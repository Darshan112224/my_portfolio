// src/components/Navbar.js
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
    <nav className="navbar">
        <div className="nav-container">
            <Link to="/" className="nav-logo">Darshan Patel</Link>
            <div className="nav-links">
                <li><a href="mailto:darshan.1116.patel@gmail.com.com">Contact Me</a></li>
                <a href="/resume_darshan_patel.pdf" target="_blank" class="resume-link">Resume</a>
                
            </div>
        </div>
    </nav>
);

export default Navbar;
