// REACT
import React from "react";

// REACT COMPONENTS
import { Card, Button, Col, Row, ListGroup } from "react-bootstrap";

// STYLING
import "../styling/Contact.css";
import "../styling/General.css";

// IMAGES
import LinkedInLogo from "../images/linkedinlogo.png";
import GitHubLogo from "../images/githublogo.png";

// Contact information component: to go under the page header
const Contact = () => {
  return (
    <div id="contact-div">
      <Button
        className="contact-btn"
        href="https://github.com/johnlaidler267"
        target="_blank"
      >
        <img src={GitHubLogo} className="contact-btn-image" />
      </Button>
      <Button
        className="contact-btn"
        href="https://www.linkedin.com/in/john-laidler-852684222/"
        target="_blank"
      >
        <img src={LinkedInLogo} className="contact-btn-image" />
      </Button>
    </div>
  );
};

export default Contact;
