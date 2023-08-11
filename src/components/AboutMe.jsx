//REACT
import React from "react";

//REACT BOOTSTRAP
import { Card, Col, Row, Container } from "react-bootstrap";

//IMAGES
import profile from "../images/ProfilePic.png";

//STYLING
import "../styling/AboutMe.css";

//ABOUT ME: My profile picture, and a short description.
const AboutMe = () => {
  return (
    <div id="abtme-bg">
      <Card className="revealUp" id="abtme-card" bsPrefix="customCard">
        <Card.Body>
          <Row>
            <Col sm={4}>
              <Card.Img
                id="abtme-img"
                className="revealUp"
                variant="top"
                src={profile}
              />
            </Col>
            <Col sm={8}>
              <Card.Title className="revealUp" id="abtme-title">
                ..Who am I?
              </Card.Title>

              <Card.Text className="revealUp abtme-text">
                Hey, my name’s Johnny. This website was built, partly for
                practice with React/JSX, partly to showcase some of the stuff I
                work on. I’m 22 years old, a graduate from the University of
                Massachusetts, Amherst.{" "}
              </Card.Text>
              <Card.Text className="revealUp abtme-text">
                I like front-end design because I’m fond on aesthetic things,
                and appreciate the process of watching my code come to life. My
                plan is to become a software engineer.
              </Card.Text>
              <Card.Text className="revealUp abtme-text">
                I also like to solo-travel. To listen to podcasts that explain
                stuff. To play basketball. To watch animal documentaries.
              </Card.Text>
              <Card.Text className="revealUp abtme-text">
                This whole thing is a work in progress. Tis' life, I suppose..
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AboutMe;
