import React from 'react';

// Import STYLING
import '../styling/General.css'
import '../styling/PortfolioStack.css'

//Import REACT COMP.
import { Card, Container, Col, Row, Button } from "react-bootstrap";

// Import IMAGES
import GitHub from "../images/GitHub.png";
import Spotify from "../images/Spotify.png";
import Reading from "../images/Reading.png";
import YouTube from "../images/YouTube.png";


const PortfolioStack = () => {
    return (
        <div className='portfolio-bg'>

            <Row>
                <Col>
                    <Card className='service-card' bsPrefix='customCard'>
                        <Card.Body>
                            <Row>
                                <Col sm={4}>
                                    <Card.Img className='service-image' src={GitHub} style={{ width: '16rem' }} />
                                </Col>
                                <Col sm={8}>
                                    <div className='stack'>
                                        <Card.Title className='title'>Github</Card.Title>
                                        <Card.Text>
                                            See my all programming projects.
                                        </Card.Text>
                                        <Button href='https://github.com/johnlaidler267' target='_blank'>View GitHub</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className='service-card' bsPrefix='customCard'>
                        <Card.Body>
                            <Row>
                                <Col sm={4}>
                                    <Card.Img className='service-image' src={YouTube} style={{ width: '16rem' }} />
                                </Col>
                                <Col sm={8}>
                                    <div className='stack'>
                                        <Card.Title className='title'>YouTube</Card.Title>
                                        <Card.Text>
                                            Watch my tutorials and vlogs.
                                        </Card.Text>
                                        <Button>View YouTube</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card className='service-card' bsPrefix='customCard'>
                        <Card.Body>
                            <Row>
                                <Col sm={4}>
                                    <Card.Img className='service-image' src={Spotify} style={{ width: '16rem' }} />
                                </Col>
                                <Col sm={8}>
                                    <div className='stack'>
                                        <Card.Title className='title'>Spotify</Card.Title>
                                        <Card.Text>
                                            What I'm listening to right now.
                                        </Card.Text>
                                        <Button>View Spotify</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className='service-card' bsPrefix='customCard'>
                        <Card.Body>
                            <Row>
                                <Col sm={4}>
                                    <Card.Img className='service-image' src={Reading} style={{ width: '16rem' }} />
                                </Col>
                                <Col sm={8}>
                                    <div className='stack'>
                                        <Card.Title className='title'>Reading List</Card.Title>
                                        <Card.Text>
                                            Check out what I'm reading these days.
                                        </Card.Text>
                                        <Button>View My Reading List</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </div>
    );
};

export default PortfolioStack;