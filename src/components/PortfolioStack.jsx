import React from "react";

// Import STYLING
import "../styling/General.css";
import "../styling/PortfolioStack.css";

//Import REACT COMP.
import { Card, Container, Col, Row, Button } from "react-bootstrap";

// Import IMAGES
import GitHub from "../images/GitHub.png";
import Spotify from "../images/Spotify.png";
import Reading from "../images/Reading.png";
import YouTube from "../images/YouTube.png";

//Import ICONS
import { PiListMagnifyingGlassBold } from "react-icons/pi";

const PortfolioStack = () => {
  return (
    <div className="portfolio-bg" id="portfolio">
      <div className="portfolio-grid">
        <h5 className="title-div revealUp">
          <PiListMagnifyingGlassBold
            style={{
              marginBottom: ".4rem",
              marginRight: ".5rem",
              fontSize: "2.5rem",
            }}
          />
          View My Work.
        </h5>

        <Card className="service-card github revealUp" bsPrefix="customCard">
          <Card.Body>
            <Row>
              <Col className="service-col" lg={6} sm={7}>
                <Card.Img className="service-image" src={GitHub} />
              </Col>
              <Col className="service-col" lg={6} sm={5}>
                <div className="stack">
                  <Card.Title className="title">Github</Card.Title>
                  <Card.Text>See my all programming projects.</Card.Text>
                  <Button
                    className="service-btn"
                    href="https://github.com/johnlaidler267"
                    target="_blank"
                  >
                    <span>View GitHub</span>
                  </Button>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card className="service-card youtube revealUp" bsPrefix="customCard">
          <Card.Body>
            <Row>
              <Col className="service-col" lg={6} sm={7}>
                <Card.Img className="service-image" src={YouTube} />
              </Col>
              <Col className="service-col" lg={6} sm={5}>
                <div className="stack">
                  <Card.Title className="title">YouTube</Card.Title>
                  <Card.Text>Watch my tutorials and vlogs.</Card.Text>
                  <Button
                    className="service-btn"
                    href="https://www.youtube.com/@johnnylaidler"
                    target="_blank"
                  >
                    <span>View YouTube</span>
                  </Button>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card className="service-card spotify revealUp" bsPrefix="customCard">
          <Card.Body>
            <Row>
              <Col className="service-col" lg={6} sm={7}>
                <Card.Img className="service-image" src={Spotify} />
              </Col>
              <Col className="service-col" lg={6} sm={5}>
                <div className="stack">
                  <Card.Title className="title">Spotify</Card.Title>
                  <Card.Text>What I'm listening to right now.</Card.Text>
                  <Button
                    className="service-btn"
                    href="https://open.spotify.com/user/21ewz7rjuudewj2d345ioysqq"
                    target="_blank"
                  >
                    <span>View Spotify</span>
                  </Button>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card className="service-card reading revealUp" bsPrefix="customCard">
          <Card.Body>
            <Row>
              <Col className="service-col" lg={6} sm={7}>
                <Card.Img className="service-image" src={Reading} />
              </Col>
              <Col className="service-col" lg={6} sm={5}>
                <div className="stack">
                  <Card.Title className="title">Reading</Card.Title>
                  <Card.Text>Check out what I'm reading.</Card.Text>
                  <Button className="service-btn">
                    <span>View Reading</span>
                  </Button>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default PortfolioStack;
