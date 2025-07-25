import '../styles/Home.css';
import Navbar from '../components/Navbar';
import heroBackground from '../assets/image-bg2.jpg';
import profilePhoto from '../assets/profile.jpg';

const Home = () => {
    return (
        <div className="home">
            {/* Navbar */}
            <Navbar />  {/* ✅ Add Navbar here so it appears on the page */}

            {/* Hero Section */}
            <div className="hero" style={{ backgroundImage: `url(${heroBackground})` }}>
                <div className="hero-content">
                    <img src={profilePhoto} alt="Darshan Patel" className="profile-photo" />
                    <h1 className="gradient-text">Hi, I'm Darshan Patel 👋</h1>
                    <p className="hero-subtext">Full-Stack Developer | Python | React | Node.js</p>
                </div>
            </div>

            {/* Wave Animation */}
            <div className="wave"></div>

            {/* About Me Section */}
            <div className="about-section">
                <div className="about-content">
                    <div className="personal-info">
                        <h2>Hi, I'm Darshan Patel 👋</h2>
                        <p>
                            I am a passionate web developer specializing in full-stack development with a strong focus on Python, Django, and JavaScript.
                            With a Bachelor's in Engineering in Information Technology from Gujarat Technological University, I have developed a strong foundation in software engineering principles and modern web technologies.
                        </p>
                    </div>

                    <div className="philosophy">
                        <h2>My Philosophy</h2>
                        <p>
                            I believe in writing clean, maintainable code that is scalable and efficient. My goal is to create software that not only meets the needs of users but also delights them with an intuitive experience.
                        </p>
                    </div>

                    <div className="motivation">
                        <h2>What Drives Me</h2>
                        <p>
                            I'm passionate about solving real-world problems through technology. Whether it's optimizing a business process or building a solution that directly impacts the end-user, I love using my skills to make a tangible difference.
                        </p>
                    </div>
                </div>
            </div>

            {/* Experience Section */}
            <section className="experience-section">
                <h2>Experience</h2>
                <div className="experience-card">
                    <h3>Python Developer Intern – Sparks to Ideas</h3>
                    <p>1 Month Internship</p>
                    <p>Developed a secure and feature-rich banking system using Django and REST APIs.</p>
                </div>
                <div className="experience-card">
                    <h3>Flutter Developer Intern – Technoguide Infosoft Pvt Ltd</h3>
                    <p>3 Month Internship</p>
                    <p>Built a digital marketing CRM app with real-time notifications and automated task assignment.</p>
                </div>
            </section>

            {/* Projects Section */}
            <section className="projects-section">
                <h2>My Projects</h2>
                <div className="projects-container">
                    {[{
                        title: 'Smart Bench Project',
                        description: 'AI-based face recognition and monitoring system.',
                        link: 'https://github.com/Darshan112224/smart-bench'
                    }, {
                        title: 'College Shortlist System',
                        description: 'Search and filter colleges using Flask and SQL.',
                        link: 'https://github.com/Darshan112224/college-shortlist'
                    }, {
                        title: 'LungScan AI',
                        description: 'Lung cancer detection using the power of AI.',
                        link: 'lungscan-project.vercel.app'
                    }, {
                        title: 'Banking System',
                        description: 'Secure and easy-to-use banking facility.',
                        link: 'https://github.com/Darshan112224/banking-system'
                    }, {
                        title: 'Car Price Prediction System',
                        description: 'Machine learning model to predict car prices.',
                        link: 'https://github.com/Darshan112224/car-price-pridiction-system'
                    }, {
                        title: 'Note App',
                        description: 'Flutter and Firebase-based note app.',
                        link: 'https://github.com/Darshan112224/notes-app'
                    }].map((project, index) => (
                        <div className="project-card" key={index}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">See on GitHub →</a>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
        
        </div>
    );
};

export default Home;