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
        <div className='portfolio-bg' id='portfolio'>

            <Container style={{ maxWidth: '90%' }}>


                <div className='portfolio-grid'>

                    <div className='title-div revealUp'>
                        <span>View My</span>
                        <div className="message">
                            <div className="word1">Coding Projects</div>
                            <div className="word2">Music and Videos</div>
                            <div className="word3">Self-Development</div>
                        </div>
                    </div>

                    <Card className='service-card github revealUp' bsPrefix='customCard'>
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
                                        <Button className='service-btn' href='https://github.com/johnlaidler267' target='_blank'><span>View GitHub</span></Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <Card className='service-card youtube revealUp' bsPrefix='customCard'>
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
                                        <Button className='service-btn' href='https://www.youtube.com/@johnnylaidler' target='_blank'><span>View YouTube</span></Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <Card className='service-card spotify revealUp' bsPrefix='customCard'>
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
                                        <Button className='service-btn' href='https://open.spotify.com/user/21ewz7rjuudewj2d345ioysqq' target='_blank'><span>View Spotify</span></Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <Card className='service-card reading revealUp' bsPrefix='customCard'>
                        <Card.Body>
                            <Row>
                                <Col sm={4}>
                                    <Card.Img className='service-image' src={Reading} style={{ width: '16rem' }} />
                                </Col>
                                <Col sm={8}>
                                    <div className='stack'>
                                        <Card.Title className='title'>Reading List</Card.Title>
                                        <Card.Text>
                                            Check out what I'm reading.
                                        </Card.Text>
                                        <Button className='service-btn'><span>View Reading</span></Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                </div>
            </Container>

        </div >
    );
};

export default PortfolioStack;