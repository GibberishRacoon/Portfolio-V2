import React from "react";
import { Container, Image } from "react-bootstrap";
import ProfilePicture from "../../assets/ja.jpg";
import "./Profile.scss";

function Profile() {
  return (
    <Container className="profile-container" id="about">
      <Image
        src={ProfilePicture}
        alt="profile picture"
        className="profile-image"
      />
      <div className="profile-details">
        <div className="profile-description">
          <h4>My name is Filip</h4>
          <p>
            Im frontend developer based in Poland currently looking for a remote
            job or Internship. Most of the projects in my portfolio are
            personal, but I also have experience with the following tech stack:
          </p>
        </div>
        <div className="tech-stack">
          <ul>
            <li>React</li>
            <li>NodeJS</li>
            <li>Python</li>
            <li>NextJS</li>
            <li>MongoDB</li>
            <li>SQL</li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default Profile;
