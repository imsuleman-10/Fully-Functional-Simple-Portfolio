import React, { useState } from 'react';
import './App.css';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

// Home Component
const Home = ({ onAdminClick }) => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="home-text">
          <h1>Hi, I'm <span className="highlight">M. Suleman Zaheer</span></h1>
          <h2>Computer Science Undergraduate at UET Narowal</h2>
          <h3>Frontend & Full-Stack Web Developer</h3>
          <p>
            Building modern, responsive, and user-friendly web applications
            using the MERN stack.
          </p>
          <div className="home-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
          </div>
        </div>
        <div className="home-image">
          <img 
            src={require('./profile1.jpg')} 
            alt="M. Suleman Zaheer" 
            className="profile-img"
          />
        </div>
      </div>
      <div className="scroll-indicator">
        <a href="#about">
          <span>↓</span>
        </a>
      </div>
    </section>
  );
};

// About Component
const About = () => {
  const education = [
    {
      level: 'Undergraduate',
      degree: 'BS Computer Science',
      institution: 'UET Narowal',
      year: '2024 – Present'
    },
    {
      level: 'Diploma',
      degree: 'Advance Web Application',
      institution: 'Yashfeen Education System Lahore',
      year: '2025'
    },
    {
      level: 'Intermediate',
      degree: 'ICS (Physics, Chemistry, Mathematics)',
      institution: 'Spectral Academy & Govt. Islamia College Civil Lines, Lahore',
      year: '2024'
    }
  ];

  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    backend: ['Node.js', 'Express.js'],
    database: ['MongoDB'],
    versionControl: ['Git', 'GitHub'],
    other: ['OOP in C++', 'Responsive Web Design', 'UI/UX Fundamentals']
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="education-section">
            <h3>Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>{edu.degree}</h4>
                    <p className="institution">{edu.institution}</p>
                    <span className="year">{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-section">
            <h3>Skills</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Frontend</h4>
                <div className="skill-tags">
                  {skills.frontend.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h4>Backend</h4>
                <div className="skill-tags">
                  {skills.backend.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h4>Database</h4>
                <div className="skill-tags">
                  {skills.database.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h4>Version Control</h4>
                <div className="skill-tags">
                  {skills.versionControl.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h4>Other</h4>
                <div className="skill-tags">
                  {skills.other.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects Component
const Projects = () => {
  const projects = [
    {
      title: 'MERN Stack ToDo App',
      description: 'A full-stack task management application with CRUD operations, user authentication, and real-time updates.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      githubLink: 'https://github.com/imsuleman-10/todo-app',
      liveDemo: '#'
    },
    {
      title: 'Personal Blog Website',
      description: 'A dynamic blog platform with article creation, categorization, and comment system.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      githubLink: 'https://github.com/imsuleman-10/blog-website',
      liveDemo: '#'
    },
    {
      title: 'E-commerce Product Showcase',
      description: 'A responsive product showcase with shopping cart functionality and product filtering.',
      techStack: ['React.js', 'Node.js', 'Express.js'],
      githubLink: 'https://github.com/imsuleman-10/ecommerce-showcase',
      liveDemo: '#'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <span>{project.title.charAt(0)}</span>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    GitHub
                  </a>
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-link">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/imsuleman.10/', icon: '📷' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/suleman-zaheer-mughal', icon: '💼' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@imsuleman.10', icon: '🎵' },
    { name: 'Facebook', url: 'https://web.facebook.com/Iamsuleman.10', icon: '📘' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: 'success', message: data.message });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>Feel free to reach out for collaborations, job opportunities, or just to say hello!</p>
            
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span className="social-icon">{link.icon}</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows="5"
                  required
                ></textarea>
              </div>

              {status.message && (
                <div className={`status-message ${status.type}`}>
                  {status.message}
                </div>
              )}

              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};



// Navigation Component
const Navigation = ({ onAdminClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            <span>SZ</span>
          </a>
          
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <button onClick={onAdminClick} className="nav-admin-btn">Admin</button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleAdminClick = () => {
    setCurrentPage('admin-login');
  };

  const handleLoginSuccess = () => {
    setCurrentPage('admin-dashboard');
  };

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    setCurrentPage('home');
  };

  const handleBack = () => {
    setCurrentPage('home');
  };

  return (
    <>
      {currentPage === 'home' && (
        <>
          <Navigation onAdminClick={handleAdminClick} />
          <main>
            <Home onAdminClick={handleAdminClick} />
            <About />
            <Projects />
            <Contact />
          </main>
          <footer className="footer">
            <div className="container">
              <p>&copy; 2024 M. Suleman Zaheer. All rights reserved.</p>
              <p>Built with SAMStack Technologies</p>
            </div>
          </footer>
        </>
      )}

      {currentPage === 'admin-login' && (
        <AdminLogin onLoginSuccess={handleLoginSuccess} onBack={handleBack} />
      )}

      {currentPage === 'admin-dashboard' && (
        <AdminDashboard onLogout={handleLogout} />
      )}
    </>
  );
}

export default App;
