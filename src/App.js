import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Button, Row, Col, Modal } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './App.css';




// Project Card Component
const ProjectCard = ({ title, description, image, link, source, tech }) => {
  return (
    <Col md={6} lg={4} className="mb-4">
      <motion.div 
        className="card h-100 shadow-sm project-card" 
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="card-img-container">
          <img src={image} className="card-img-top" alt={title} />
        </div>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text flex-grow-1">{description}</p>
          <div className="tech-stack mb-3">
            {tech.map((item, idx) => (
              <span key={idx} className="badge bg-light text-dark me-1">{item}</span>
            ))}
          </div>
          <div className="d-flex justify-content-between">
            <a href={link} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">View Demo</a>
            <a href={source} className="btn btn-outline-secondary btn-sm" target="_blank" rel="noopener noreferrer">Source Code</a>
          </div>
        </div>
      </motion.div>
    </Col>
  );
};

// Skill Card Component
const SkillCard = ({ icon, title, skills }) => {
  return (
    <Col md={4} className="mb-4">
      <motion.div 
        className="card h-100 shadow-sm" 
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="card-body text-center">
          <div className="skill-icon mb-3">{icon}</div>
          <h4 className="card-title">{title}</h4>
          <div className="skill-tags">
            {skills.map((skill, idx) => (
              <span key={idx} className="badge bg-light text-dark me-1 mb-1">{skill}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </Col>
  );
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle Dark Mode
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu when a link is clicked
  const closeMenu = () => setIsMenuOpen(false);

  // Save the dark mode preference to localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Apply dark mode to the body when the state changes
    if (darkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const skills = [
    { icon: '🧠', title: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript','React', 'Bootstrap', 'Tailwind', 'Next.js'] },
    { icon: '⚙️', title: 'Backend', skills: ['Node.js', 'Express', 'MongoDB', 'MySQL'] },
    { icon: '🛠️', title: 'Tools', skills: ['Git', 'GitHub', 'VS Code', 'Figma']},
    { icon: '🤖', title: 'Machine Learning', skills: ['Python', 'TensorFlow', 'Scikit-learn'] }
  ];

  const projects = [
    {
      title: 'SMS Spam Detection',
      description: 'A machine learning project that detects spam messages using Python and NLTK. Deployed using Streamlit.',
      image: '/assets/spam.png',
      link: 'https://sms-spam-detector-bdozhp2zelakecxjnvqsa3.streamlit.app/',
      source: 'https://github.com/Bichu0077/sms-spam-detector',
      tech: ['Python', 'NLTK', 'Streamlit'],

    },
    {
      title: 'Stack Overflow Clone',
      description: 'A full-stack application that mimics the functionality of Stack Overflow, built with the MERN stack.',
      image: '/assets/stack.png',
      link: 'https://eloquent-sopapillas-e3d7c9.netlify.app/',
      source: 'https://github.com/Bichu0077/stack-overflow-clone',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],

    },
    
    // {
    //   title: 'OfferPool',
    //   description: 'A website to find people who are willing to make use of an offer at a supermarket.',
    //   image: '/assets/task-tracker.png',
    //   link: '',
    //   source: '',
    //   tech: ['React', 'CSS', 'LocalStorage'],
    // },
    {
      title: 'Portfolio Website',
      description: 'This responsive portfolio website built with React and Bootstrap.',
      image: '/assets/Portfolio.png',
      link: '#',
      source: 'https://github.com/my-username/portfolio',
      tech: ['React', 'Bootstrap', 'Framer Motion'],
    },
  ];

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Navbar expand="lg" className={`${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} shadow-sm fixed-top`}>
        <Container>
          <Navbar.Brand href="#">BichuDev</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
          <Navbar.Collapse id="basic-navbar-nav" className={isMenuOpen ? 'show' : ''}>
            <Nav className="ms-auto">
              <Nav.Link href="#about" onClick={closeMenu}>About</Nav.Link>
              <Nav.Link href="#projects" onClick={closeMenu}>Projects</Nav.Link>
              <Nav.Link href="#skills" onClick={closeMenu}>Skills</Nav.Link>
              <Nav.Link href="#contact" onClick={closeMenu}>Contact</Nav.Link>
              <Button 
                variant={darkMode ? "outline-light" : "outline-dark"} 
                onClick={toggleDarkMode} 
                className="ms-lg-2 mt-2 mt-lg-0"
              >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="content-wrapper">
        <section id="about" className="py-5">
          <Container className="mt-5 pt-5">
            <Row className="align-items-center">
              <Col lg={6} className="mb-4 mb-lg-0">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="fw-bold">Hi, I'm Bichu Devnarayan</h1>
                  <h2 className="text-primary mb-4">Software Developer</h2>
                  <p className="lead mb-4">
                    I'm a MERN stack developer and a machine learning engineer. I build full-stack web applications that are fast and user-friendly, while also working on ML projects that extract insights and solve real-world problems.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <Button variant="primary" onClick={() => setShowModal(true)}>
                      Download Resume
                    </Button>
                    <Button variant="outline-primary" href="#contact">
                      Contact Me
                    </Button>
                  </div>
                </motion.div>
              </Col>
              <Col lg={6} className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <img
  src="/assets/Bichupic.png"
  alt="Bichu Devnarayan"
  className="profile-image"
/>

                </motion.div>
              </Col>

            </Row>
          </Container>
        </section>

        <section id="projects" className="py-5 bg-light-custom">
          <Container className="py-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-center mb-5 section-title">My Projects</h2>
              <Row>
                {projects.map((project, idx) => (
                  <ProjectCard key={idx} {...project} />
                ))}
              </Row>
            </motion.div>
          </Container>
        </section>

        <section id="skills" className="py-5">
          <Container className="py-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-center mb-5 section-title">Skills & Technologies</h2>
              <Row>
                {skills.map((skill, idx) => (
                  <SkillCard key={idx} {...skill} />
                ))}
              </Row>
            </motion.div>
          </Container>
        </section>

        <section id="contact" className="py-5 bg-light-custom">
          <Container className="py-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-center mb-5 section-title">Get In Touch</h2>
              <Row className="justify-content-center">
                <Col md={8} lg={6}>
                  <div className="contact-info text-center mb-4">
                    <p className="lead">Feel free to reach out for collaborations or just a friendly chat</p>
                    <p className="mb-4">
                      <a href="mailto:bichudnarayan@gmail.com" className="text-decoration-none">
                      mailto:bichudnarayan@gmail.com
                      </a>
                    </p>
                  </div>
                  <div className="social-links d-flex justify-content-center gap-3 mb-4">
                    <motion.a 
                      href="https://github.com/Bichu0077" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      className="social-icon"
                    >
                      <FaGithub size={24} />
                    </motion.a>
                    <motion.a 
                      href="https://www.linkedin.com/in/bichu-devnarayan-2b9b4b288/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      className="social-icon"
                    >
                      <FaLinkedin size={24} />
                    </motion.a>
                    <motion.a 
                      href="https://x.com/BichuDev_2005" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      className="social-icon"
                    >
                      <FaTwitter size={24} />
                    </motion.a>
                    <motion.a 
                      href="mailto:bichudnarayan@gmail.com" 
                      whileHover={{ scale: 1.2 }}
                      className="social-icon"
                    >
                      <FaEnvelope size={24} />
                    </motion.a>
                  </div>
                </Col>
              </Row>
            </motion.div>
          </Container>
        </section>

        <footer className={`py-4 ${darkMode ? 'bg-dark text-white' : 'bg-light'}`}>
          <Container>
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
              <p className="mb-2 mb-md-0">© {new Date().getFullYear()} Bichu Devnarayan. All rights reserved.</p>
              <div className="social-links d-flex gap-3">
                <a href="https://github.com/Bichu0077" target="_blank" rel="noopener noreferrer" className="social-icon-small">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/bichu-devnarayan-2b9b4b288/" target="_blank" rel="noopener noreferrer" className="social-icon-small">
                  <FaLinkedin />
                </a>
                <a href="https://x.com/BichuDev_2005" target="_blank" rel="noopener noreferrer" className="social-icon-small">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </Container>
        </footer>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Download Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Click the button below to download my latest resume.</p>
          <Button variant="primary" href="/assets/resume.pdf" download>
            Download Resume
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;