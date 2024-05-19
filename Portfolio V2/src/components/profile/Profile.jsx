import React from "react";
import { Container, Image } from "react-bootstrap";
import ProfilePicture from "../../assets/ja.jpg";
import "./Profile.scss";

function Profile() {
  return (
    <>
      <Container className="profile-container">
        <Image
          src={ProfilePicture}
          alt="profile picture"
          className="profile-image"
          rounded
        />
      </Container>

      <div>
        <h4>My name is Phillip</h4>
        <p>
          Hi! I’m Filip, a frontend developer based in Poland currently looking
          for a full-time remote job. Most of the projects in my portfolio are
          personal, but I also Tech stack I have been working with:
        </p>
        <ul>
          <li>React</li>
          <li>Python</li>
          <li>NextJS</li>
          <li>MongoDB</li>
          <li>SQL</li>
        </ul>
      </div>
    </>
  );
}

export default Profile;
