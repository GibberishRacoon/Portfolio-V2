import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Carousel,
  Modal,
  Nav,
} from "react-bootstrap";
import "./Portfolio.scss";
import project1_1 from "../../assets/Proj1_1.png";
import project1_2 from "../../assets/Proj1_2.png";
import project1_3 from "../../assets/Proj1_3.png";
import project2_1 from "../../assets/Proj2_1.png";
import project2_2 from "../../assets/Proj2_2.png";
import project2_3 from "../../assets/Proj2_3.png";

const projects = [
  {
    title: "Escape Room Manager",
    description:
      "The app allows users to subscribe to their favorite Twitch streamers, and watch streams that they have missed. Users can add their own channels and/or remove them. Mark videos as watched and bookmarked.",
    images: [project1_1, project1_2, project1_3],
    tech: ["React", "NodeJS", "MongoDB"],
    codeLink: "https://github.com/GibberishRacoon/Escape-Room-manager.git",
  },
  {
    title: "Dynamic Location Selector",
    description:
      "Simple app that is dynamicly searching users based on location form database",
    images: [project2_1, project2_2, project2_3],
    tech: ["React", "MySQL"],
    codeLink: "https://github.com/GibberishRacoon/Simple-React-app.git",
  },
];

function Portfolio() {
  const [show, setShow] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = (image) => {
    setModalImage(image);
    setShow(true);
  };

  const currentProject = projects[currentProjectIndex];

  return (
    <Container className="portfolio-container" id="portfolio">
      <Nav variant="tabs" defaultActiveKey={0} className="mb-3">
        {projects.map((project, index) => (
          <Nav.Item key={index}>
            <Nav.Link
              eventKey={index}
              onClick={() => setCurrentProjectIndex(index)}
            >
              {project.title}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <Col className="portfolio-item">
        <Col xs={12} lg={6} className="portfolio-image">
          <Carousel>
            {currentProject.images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100 fixed-size"
                  src={image}
                  alt={`Slide ${index}`}
                  onClick={() => handleShow(image)}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col xs={12} lg={6} className="portfolio-description">
          <h2>{currentProject.title}</h2>
          <p>{currentProject.description}</p>
          <ul className="tech-list">
            {currentProject.tech.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <Button
            href={currentProject.codeLink}
            target="_blank"
            className="btn-secondary"
          >
            CODE
          </Button>
        </Col>
      </Col>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="lg"
        className="custom-modal"
      >
        <Modal.Body className="d-flex justify-content-center align-items-center position-relative">
          <img
            src={modalImage}
            alt="Modal content"
            className="img-fluid fullsize-image"
          />
          <Button
            variant="light"
            className="close-button"
            onClick={handleClose}
          >
            &times;
          </Button>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Portfolio;
