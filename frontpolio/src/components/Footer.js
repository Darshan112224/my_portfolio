import '../styles/Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
    <footer className="footer">
        <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} Darshan Patel. All rights reserved.</p>
            <div className="social-links">
                {/* GitHub */}
                <a href="https://github.com/Darshan112224" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon" />
                </a>
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/darshan-patel-5514bb266/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="icon" />
                </a>
                {/* Gmail */}
                <a href="mailto:darshan.1116.patel@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className="icon" />
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;
