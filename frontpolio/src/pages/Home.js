import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import '../styles/Home.css';
import Contact from '../components/Contact';
import heroBackground from '../assets/image-bg2.jpg';
import profilePhoto from '../assets/profile.jpg';

const Home = () => {
    const particlesInit = async (engine) => {
        console.log("Engine:", engine);
        await loadFull(engine);
    };

    const particlesLoaded = useCallback(async (container) => {
        console.log("Particles Loaded:", container);
    }, []);

    return (
        <div className="home">
            {/* Particles Background */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fullScreen: { enable: false },
                    particles: {
                        number: { value: 60 },
                        color: { value: "#ffffff" },
                        shape: { type: "circle" },
                        opacity: {
                            value: 0.7,
                            random: true,
                            anim: { enable: true, speed: 1, opacity_min: 0.2 }
                        },
                        size: {
                            value: 4,
                            random: true,
                            anim: { enable: true, speed: 2, size_min: 0.2 }
                        },
                        links: {
                            enable: true,
                            distance: 120,
                            color: "#ffffff",
                            opacity: 0.4,
                            width: 1
                        },
                        move: {
                            enable: true,
                            speed: 2,
                            out_mode: "out"
                        }
                    },
                    interactivity: {
                        events: {
                            onHover: { enable: true, mode: "repulse" },
                            onClick: { enable: true, mode: "push" }
                        },
                        modes: {
                            repulse: { distance: 100, duration: 0.4 },
                            push: { particles_nb: 4 }
                        }
                    },
                    retina_detect: true
                }}
            />

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
        {/* Personal Info */}
        <div className="personal-info">
            <h2>Hi, I'm Darshan Patel 👋</h2>
            <p>
                I am a passionate web developer specializing in full-stack development with a strong focus on Python, Django, and JavaScript.
                With a Bachelor's in Engineering in Information Technology from Gujarat Technological University, I have developed a strong foundation in software engineering principles and modern web technologies. 
                I am constantly striving to improve my skills and tackle new challenges in the development field.
            </p>

        {/* Philosophy */}
        <div className="philosophy">
            <h2>My Philosophy</h2>
            <p>
                I believe in writing clean, maintainable code that is scalable and efficient. My goal is to create software that not only meets the needs of users but also delights them with an intuitive experience.
                Problem-solving and continuous learning are key aspects of my development process, and I strive to stay updated with the latest industry trends.
            </p>
        </div>

        {/* Motivation */}
        <div className="motivation">
            <h2>What Drives Me</h2>
            <p>
                I'm passionate about solving real-world problems through technology. Whether it's optimizing a business process or building a solution that directly impacts the end-user, I love using my skills to make a tangible difference.
                My motivation comes from the desire to learn and grow in the ever-evolving tech landscape.
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
                    <p>
                        Developed a secure and feature-rich banking system using Django and REST APIs. Added features like transaction report filtering, balance tracking, and monthly interest calculation using Celery.
                    </p>
                </div>
                <div className="experience-card">
                    <h3>Flutter Developer Intern – Technoguide Infosoft Pvt Ltd</h3>
                    <p>3 Month Internship</p>
                    <p>
                        Built a digital marketing CRM app with real-time notifications, automated task assignment, and enhanced workflow efficiency.
                    </p>
                </div>
            </section>

            {/* Projects Section */}
            <section className="projects-section">
                <h2>My Projects</h2>
                <div className="projects-container">
                    {[
                        {
                            title: 'Smart Bench Project',
                            description: 'AI-based face recognition and monitoring system.',
                            link: 'https://github.com/Darshan112224/smart-bench'
                        },
                        {
                            title: 'College Shortlist System',
                            description: 'Search and filter colleges using Flask and SQL.',
                            link: 'https://github.com/Darshan112224/college-shortlist'
                        },
                        {
                            title: 'AI Website Generator',
                            description: 'Generate websites using AI power with prompts.',
                            link: 'https://github.com/Darshan112224/AI-Website-Generator-Backend'
                        },
                        {
                            title: 'Banking System',
                            description: 'Secure and easy-to-use banking facility.',
                            link: 'https://github.com/Darshan112224/banking-system'
                        },
                        {
                            title: 'Car Price Prediction System',
                            description: 'Machine learning model to predict car prices.',
                            link: 'https://github.com/Darshan112224/car-price-pridiction-system'
                        },
                        {
                            title: 'Note App',
                            description: 'Flutter and Firebase-based note app.',
                            link: 'https://github.com/Darshan112224/notes-app'
                        }
                    ].map((project, index) => (
                        <div className="project-card" key={index}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                See on GitHub →
                            </a>
                        </div>
                    ))}
                </div>
            </section>
            
            {/* Contect Section */}
            <Contact />

            </div>
        </div>
        
    );
};

export default Home;
