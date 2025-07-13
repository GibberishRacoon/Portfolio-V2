import React from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import ProfilePicture from "../../assets/ja2.jpg";
import "./Profile.scss";

function Profile() {
  const skillCategories = {
    frontend: [
      { name: "JavaScript", level: 75, years: 2 },
      { name: "React", level: 70, years: 1 },
      { name: "HTML/CSS", level: 85, years: 2 },
      { name: "Sass/SCSS", level: 65, years: 1 },
    ],
    backend: [
      { name: "Node.js", level: 60, years: 1 },
      { name: "Python", level: 65, years: 2 },
      { name: "C#/.NET", level: 55, years: 1 },
    ],
    database: [
      { name: "MongoDB", level: 55, years: 1 },
      { name: "MySQL", level: 65, years: 1 },
      { name: "SQL Server", level: 60, years: 1 },
    ],
    tools: [
      { name: "Git", level: 70, years: 2 },
      { name: "Docker", level: 40, years: 1 },
      { name: "VS Code", level: 85, years: 2 },
    ],
  };

  const achievements = [
    {
      icon: "🎓",
      title: "Computer Science Graduate",
      desc: "Polish-Japanese Academy of Information Technology",
    },
    {
      icon: "💼",
      title: "IT Internship Experience",
      desc: "Elis | 6 months total",
    },
    {
      icon: "🌐",
      title: "Freelance Projects",
      desc: "Academic & web development",
    },
    { icon: "🏆", title: "Personal Portfolio", desc: "15+ completed projects" },
  ];

  return (
    <Container className="enhanced-profile-container" id="about">
      {/* Hero Section */}
      <Row className="profile-hero align-items-center">
        <Col lg={4} md={12} className="profile-image-section">
          <div className="profile-image-container">
            <div className="profile-image-wrapper">
              <img
                src={ProfilePicture}
                alt="Filip Augustynek - Frontend Developer"
                className="profile-image"
              />
              <div className="profile-status">
                <div className="status-dot"></div>
                <span>Available for work</span>
              </div>
            </div>
            <div className="profile-floating-card">
              <div className="floating-info">
                <span className="location">📍 Poland</span>
                <span className="remote">🌐 Remote Ready</span>
              </div>
            </div>
          </div>
        </Col>

        <Col lg={8} md={12} className="profile-content">
          <div className="profile-intro">
            <h1 className="profile-name">
              Hi, I'm <span className="name-highlight">Filip Augustynek</span>
              <span className="wave">👋</span>
            </h1>
            <h2 className="profile-title">
              <span className="typing-text">Frontend Developer</span>
              <span className="cursor">|</span>
            </h2>
            <p className="profile-subtitle">
              Passionate about creating modern, responsive web applications with
              clean code and exceptional user experiences.
            </p>
          </div>

          <div className="profile-stats">
            <Row>
              <Col sm={3} className="stat-item">
                <div className="stat-number">2+</div>
                <div className="stat-label">Years Experience</div>
              </Col>
              <Col sm={3} className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Projects</div>
              </Col>
              <Col sm={3} className="stat-item">
                <div className="stat-number">C1</div>
                <div className="stat-label">English Level</div>
              </Col>
              <Col sm={3} className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Remote</div>
              </Col>
            </Row>
          </div>

          <div className="profile-description">
            <p>
              I'm a <strong>computer science graduate</strong> from Poland,
              learning frontend development with React and modern JavaScript. I
              have some experience with full-stack technologies through
              internships and personal projects, and am passionate about
              creating solutions that solve real problems.
            </p>
            <p>
              Currently seeking <strong>entry-level opportunities</strong> or
              internships where I can contribute to meaningful projects while
              continuing to learn and grow as a developer.
            </p>
          </div>

          <div className="contact-actions">
            <Button
              href="mailto:augustynekfilip@gmail.com"
              className="contact-btn primary"
              size="lg"
            >
              📧 Let's Talk
            </Button>
            <Button
              href="https://www.linkedin.com/in/filip-augustynek"
              target="_blank"
              className="contact-btn secondary"
              size="lg"
            >
              💼 LinkedIn
            </Button>
            <Button
              href="https://github.com/GibberishRacoon"
              target="_blank"
              className="contact-btn outline"
              size="lg"
            >
              💻 GitHub
            </Button>
            <Button href="#portfolio" className="contact-btn outline" size="lg">
              🎯 View Portfolio
            </Button>
          </div>
        </Col>
      </Row>

      {/* Skills Section */}
      <Row className="skills-section">
        <Col md={12}>
          <div className="section-header">
            <h3>Technical Expertise</h3>
            <p>Technologies I work with and my proficiency levels</p>
          </div>

          <Row>
            {Object.entries(skillCategories).map(([category, skills]) => (
              <Col lg={3} md={6} key={category} className="mb-4">
                <Card className="skill-category-card">
                  <Card.Header>
                    <h5>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </h5>
                  </Card.Header>
                  <Card.Body>
                    {skills.map((skill, index) => (
                      <div key={index} className="skill-item">
                        <div className="skill-info">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-years">{skill.years}y</span>
                        </div>
                        <div className="skill-bar">
                          <div
                            className="skill-progress"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <div className="skill-level">{skill.level}%</div>
                      </div>
                    ))}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* Achievements Section */}
      <Row className="achievements-section">
        <Col md={12}>
          <div className="section-header">
            <h3>Career Highlights</h3>
            <p>Key milestones in my professional journey</p>
          </div>

          <Row>
            {achievements.map((achievement, index) => (
              <Col lg={3} md={6} key={index} className="mb-4">
                <Card className="achievement-card">
                  <Card.Body className="text-center">
                    <div className="achievement-icon">{achievement.icon}</div>
                    <h5>{achievement.title}</h5>
                    <p>{achievement.desc}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
