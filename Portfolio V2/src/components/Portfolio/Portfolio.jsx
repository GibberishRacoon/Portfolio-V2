import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import Modal from "react-modal";
import "./Portfolio.scss";

// Import project images
import project1_1 from "../../assets/Proj1_1.png";
import project1_2 from "../../assets/Proj1_2.png";
import project1_3 from "../../assets/Proj1_3.png";
import project2_1 from "../../assets/Proj2_1.png";
import project2_2 from "../../assets/Proj2_2.png";
import project2_3 from "../../assets/Proj2_3.png";
// Placeholder for new projects (add images later)
import mp_1 from "../../assets/Mp/Mp_1.png";
import mp_2 from "../../assets/Mp/Mp_2.png";
import mp_3 from "../../assets/Mp/Mp_3.png";
import mp_4 from "../../assets/Mp/Mp_4.png";
import mp_5 from "../../assets/Mp/Mp_5.png";
import mp_6 from "../../assets/Mp/Mp_6.png";
import mp_7 from "../../assets/Mp/Mp_7.png";
import mp_8 from "../../assets/Mp/Mp_8.png";

import Iot_1 from "../../assets/IoT/IoT_1.png";
import Iot_2 from "../../assets/IoT/IoT_2.png";
import Iot_3 from "../../assets/IoT/IoT_3.png";
import Iot_4 from "../../assets/IoT/IoT_4.png";
import Iot_5 from "../../assets/IoT/IoT_5.png";
import Iot_6 from "../../assets/IoT/IoT_6.png";
import Iot_7 from "../../assets/IoT/IoT_7.png";
import Iot_8 from "../../assets/IoT/IoT_8.png";
import Iot_9 from "../../assets/IoT/IoT_9.png";

import placeholderImg from "../../assets/Proj1_1.png"; // Temporary placeholder

// Set app element for accessibility
Modal.setAppElement("#root");

const projects = [
  {
    id: 1,
    title: "Academic Profile Platform",
    category: "Freelance Project",
    shortDesc: "Professional academic portfolio website for client",
    fullDescription:
      "A custom-built academic profile website designed for a university professor to showcase their research, publications, and professional achievements. The platform features clean navigation through CV sections, research publications, and contact information. Built with modern web technologies focusing on accessibility and academic presentation standards.",
    images: [mp_1, mp_2, mp_3, mp_4, mp_5, mp_6, mp_7, mp_8], // Will be updated with actual images
    technologies: [
      { name: "React", type: "frontend" },
      { name: "Tailwind CSS", type: "styling" },
      { name: "JavaScript", type: "language" },
      { name: "Responsive Design", type: "styling" },
      { name: "Mobile first", type: "styling" },
    ],
    features: [
      "📝 Structured CV and biography presentation",
      "📚 Publications and research showcase",
      "🎓 Academic credentials display",
      "📧 Professional contact information",
      "📱 Mobile-friendly responsive design",
      "🎨 Academic-focused clean interface",
      "⚡ Fast loading and optimized performance",
    ],
    challenges: [
      "Designing appropriate academic layout",
      "Structuring complex academic information",
      "Meeting client's specific requirements",
      "Ensuring cross-browser compatibility",
    ],
    links: {
      github: "https://github.com/GibberishRacoon/Academic-Profile",
      demo: null,
    },
    status: "Completed",
    duration: "2 months",
    teamSize: "Freelance Project",
  },
  {
    id: 2,
    title: "IoT Social Platform",
    category: "Engineering Thesis",
    shortDesc: "Social platform for IoT enthusiasts and projects",
    fullDescription:
      "A comprehensive social platform designed for IoT enthusiasts to share projects, collaborate, and expand functionality in a modular way. This open-source application serves as an alternative to closed IoT systems, built with React.js frontend, Java backend, and MongoDB database. The platform enables project sharing, real-time collaboration, and community-driven development.",
    images: [Iot_1, Iot_2, Iot_3, Iot_4, Iot_5, Iot_6, Iot_7, Iot_8, Iot_9], // Will be updated with actual images
    technologies: [
      { name: "React.js", type: "frontend" },
      { name: "Java", type: "backend" },
      { name: "MongoDB", type: "database" },
      { name: "Spring Boot", type: "backend" },
      { name: "REST API", type: "backend" },
      { name: "WebSocket", type: "backend" },
    ],
    features: [
      "🤝 Project sharing and collaboration tools",
      "👥 Community-driven development platform",
      "🔧 Modular functionality expansion",
      "💬 Real-time messaging and notifications",
      "🏗️ IoT project documentation system",
      "🔍 Advanced project search and filtering",
      "📊 Project analytics and metrics",
      "🌐 Open-source alternative to closed systems",
    ],
    challenges: [
      "Designing scalable microservices architecture",
      "Implementing real-time collaboration features",
      "Creating modular plugin system",
      "Ensuring data security and privacy",
    ],
    links: {
      github: "https://github.com/IGutkowski/inzyFrontend",
      demo: null,
    },
    status: "Engineering Thesis",
    duration: "6 months",
    teamSize: "Team Project",
  },
  {
    id: 3,
    title: "Escape Room Manager",
    category: "Full Stack Application",
    shortDesc: "Management system for escape room bookings",
    fullDescription:
      "A web application built with React and Node.js for managing escape room operations. The system handles booking management, user authentication, and basic room availability tracking. Features separate interfaces for administrators and customers with essential booking functionality.",
    images: [project1_1, project1_2, project1_3],
    technologies: [
      { name: "React", type: "frontend" },
      { name: "Node.js", type: "backend" },
      { name: "MongoDB", type: "database" },
      { name: "Express.js", type: "backend" },
      { name: "JWT", type: "auth" },
    ],
    features: [
      "🏢 Basic admin dashboard",
      "📅 Room booking system",
      "👥 User authentication",
      "📊 Simple booking tracking",
      "📱 Responsive design",
      "🎮 Room status management",
    ],
    challenges: [
      "Implementing booking logic",
      "Setting up authentication system",
      "Creating admin interface",
      "Managing room availability",
    ],
    links: {
      github: "https://github.com/GibberishRacoon/Escape-Room-manager.git",
      demo: null,
    },
    status: "Completed",
    duration: "2 weeks",
    teamSize: "Solo Project",
  },
  {
    id: 4,
    title: "Dynamic Location Selector",
    category: "Frontend Application",
    shortDesc: "Quick location-based filtering exercise",
    fullDescription:
      "A simple React application that demonstrates dynamic user search and filtering based on location data. Built as a quick learning exercise to practice React fundamentals, state management, and API integration. Features basic search functionality and location-based filtering with a clean, minimal interface.",
    images: [project2_1, project2_2, project2_3],
    technologies: [
      { name: "React", type: "frontend" },
      { name: "CSS3", type: "styling" },
      { name: "JavaScript", type: "language" },
    ],
    features: [
      "🔍 Basic search functionality",
      "📍 Location-based filtering",
      "📱 Simple responsive design",
      "🎨 Clean minimal interface",
      "🔄 Dynamic content display",
    ],
    challenges: [
      "Learning React state management",
      "Implementing search logic",
      "Creating responsive layout",
      "Managing component lifecycle",
    ],
    links: {
      github: "https://github.com/GibberishRacoon/Simple-React-app.git",
      demo: null,
    },
    status: "Learning Exercise",
    duration: "2 days",
    teamSize: "Solo Project",
  },
];

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [filter, setFilter] = useState("all");

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsImageModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  const openImageModal = (index) => {
    setCurrentImageIndex(index);
    setIsImageModalOpen(true);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(
        (prev) => (prev + 1) % selectedProject.images.length
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const getTechTypeColor = (type) => {
    const colors = {
      frontend: "#61dafb",
      backend: "#68a063",
      database: "#f29111",
      auth: "#ff6b6b",
      payment: "#4ecdc4",
      styling: "#e056fd",
      language: "#f7df1e",
    };
    return colors[type] || "#6c757d";
  };

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) =>
          project.category.toLowerCase().includes(filter.toLowerCase())
        );

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (isImageModalOpen) {
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "Escape") setIsImageModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isImageModalOpen]);

  return (
    <Container className="enhanced-portfolio-container" id="portfolio">
      {/* Portfolio Header */}
      <div className="portfolio-header">
        <h2 className="portfolio-title">
          My <span className="title-highlight">Portfolio</span>
        </h2>
        <p className="portfolio-subtitle">
          Personal projects showcasing my learning journey in web development
        </p>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          {["all", "full stack", "frontend", "freelance", "thesis"].map(
            (filterType) => (
              <Button
                key={filterType}
                className={`filter-btn ${
                  filter === filterType ? "active" : ""
                }`}
                onClick={() => setFilter(filterType)}
              >
                {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
              </Button>
            )
          )}
        </div>
      </div>

      {/* Projects Grid */}
      <Row className="projects-grid">
        {filteredProjects.map((project, index) => (
          <Col lg={6} md={12} key={project.id} className="mb-4">
            <Card
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="project-image-container">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="overlay-content">
                    <h4>{project.title}</h4>
                    <p>{project.shortDesc}</p>
                    <Button
                      className="view-details-btn"
                      onClick={() => openProjectModal(project)}
                    >
                      <span>View Details</span>
                      <i className="arrow">→</i>
                    </Button>
                  </div>
                </div>
                <Badge className="project-category-badge">
                  {project.category}
                </Badge>
              </div>

              <Card.Body className="project-info">
                <div className="project-meta">
                  <span className="project-status">{project.status}</span>
                  <span className="project-duration">{project.duration}</span>
                </div>

                <h5 className="project-title">{project.title}</h5>
                <p className="project-short-desc">{project.shortDesc}</p>

                <div className="tech-preview">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <Badge
                      key={index}
                      className="tech-badge"
                      style={{ backgroundColor: getTechTypeColor(tech.type) }}
                    >
                      {tech.name}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge className="tech-badge more">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>

                <div className="project-actions">
                  <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => openProjectModal(project)}
                  >
                    Learn More
                  </Button>
                  <Button
                    variant="link"
                    size="sm"
                    href={project.links.github}
                    target="_blank"
                  >
                    GitHub →
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Project Detail Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="project-detail-modal"
        overlayClassName="modal-overlay"
        closeTimeoutMS={300}
      >
        {selectedProject && (
          <div className="modal-content">
            <button className="modal-close-btn" onClick={closeModal}>
              <span>×</span>
            </button>

            <div className="modal-header">
              <div className="modal-title-section">
                <h2>{selectedProject.title}</h2>
                <Badge className="category-badge">
                  {selectedProject.category}
                </Badge>
              </div>
              <div className="project-meta-info">
                <span className="meta-item">📅 {selectedProject.duration}</span>
                <span className="meta-item">👤 {selectedProject.teamSize}</span>
                <span className="meta-item">✅ {selectedProject.status}</span>
              </div>
            </div>

            <Row>
              <Col lg={7}>
                {/* Image Gallery */}
                <div className="modal-gallery">
                  <div className="main-image-container">
                    <img
                      src={selectedProject.images[currentImageIndex]}
                      alt={`${selectedProject.title} - Image ${
                        currentImageIndex + 1
                      }`}
                      className="main-modal-image"
                      onClick={() => openImageModal(currentImageIndex)}
                    />

                    {selectedProject.images.length > 1 && (
                      <div className="gallery-controls">
                        <button
                          className="gallery-btn prev"
                          onClick={prevImage}
                        >
                          ‹
                        </button>
                        <button
                          className="gallery-btn next"
                          onClick={nextImage}
                        >
                          ›
                        </button>
                      </div>
                    )}

                    <div className="image-counter">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  </div>

                  {selectedProject.images.length > 1 && (
                    <div className="thumbnail-strip">
                      {selectedProject.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          className={`thumbnail ${
                            index === currentImageIndex ? "active" : ""
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </Col>

              <Col lg={5}>
                <div className="modal-details">
                  {/* Description */}
                  <div className="detail-section">
                    <h4>📝 Project Overview</h4>
                    <p>{selectedProject.fullDescription}</p>
                  </div>

                  {/* Technologies */}
                  <div className="detail-section">
                    <h4>🛠️ Technologies Used</h4>
                    <div className="tech-grid">
                      {selectedProject.technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          className="tech-badge-detailed"
                          style={{
                            backgroundColor: getTechTypeColor(tech.type),
                          }}
                        >
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="detail-section">
                    <h4>✨ Key Features</h4>
                    <div className="features-list">
                      {selectedProject.features.map((feature, index) => (
                        <div key={index} className="feature-item">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Challenges */}
                  <div className="detail-section">
                    <h4>🎯 Technical Challenges</h4>
                    <ul className="challenges-list">
                      {selectedProject.challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="modal-actions">
                    <Button
                      className="action-btn primary"
                      href={selectedProject.links.github}
                      target="_blank"
                    >
                      <span>📂 View Code</span>
                    </Button>
                    {selectedProject.links.demo && (
                      <Button
                        className="action-btn secondary"
                        href={selectedProject.links.demo}
                        target="_blank"
                      >
                        <span>🌐 Live Demo</span>
                      </Button>
                    )}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        )}
      </Modal>

      {/* Fullscreen Image Modal */}
      <Modal
        isOpen={isImageModalOpen}
        onRequestClose={() => setIsImageModalOpen(false)}
        className="fullscreen-image-modal"
        overlayClassName="fullscreen-overlay"
        closeTimeoutMS={200}
      >
        {selectedProject && (
          <div className="fullscreen-content">
            <button
              className="fullscreen-close"
              onClick={() => setIsImageModalOpen(false)}
            >
              ×
            </button>

            <img
              src={selectedProject.images[currentImageIndex]}
              alt={`${selectedProject.title} - Fullscreen`}
              className="fullscreen-image"
            />

            {selectedProject.images.length > 1 && (
              <div className="fullscreen-controls">
                <button className="fullscreen-btn prev" onClick={prevImage}>
                  ‹
                </button>
                <button className="fullscreen-btn next" onClick={nextImage}>
                  ›
                </button>
              </div>
            )}

            <div className="fullscreen-info">
              <h4>{selectedProject.title}</h4>
              <span>
                {currentImageIndex + 1} / {selectedProject.images.length}
              </span>
            </div>
          </div>
        )}
      </Modal>
    </Container>
  );
}

export default Portfolio;
