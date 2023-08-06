//REACT
import React from 'react';

//REACT BOOTSTRAP
import { Card, Col, Row } from "react-bootstrap";
import Zoom from 'react-reveal/Zoom'

//IMAGES
import profile from "../images/ProfilePic.jpg";

//STYLING
import '../styling/AboutMe.css';

//ABOUT ME: My profile picture, and a short description.
const AboutMe: React.FC = () => {
    return (
        <div className='abtme-bg'>

            <div >

                <Card className='abtme-card revealUp' bsPrefix='customCard'>
                    <Card.Body>
                        <Row>
                            <Col sm={8}>
                                <Card.Title className='abtme-title revealUp' style={{ fontSize: '2rem', padding: '1rem' }}>Who am I?</Card.Title>

                                <Card.Text className='revealUp'>
                                    Hey, my name’s Johnny. This website was built, partly for practice with React/JSX, partly to showcase some of the stuff I work on. I’m 22 years old, a graduate from the University of Massachusetts, Amherst. </Card.Text>
                                <Card.Text className='revealUp'>I like front-end design because I’m fond on aesthetic things, and appreciate the process of watching my code come to life. My plan is to become a software engineer.</Card.Text>
                                <Card.Text className='revealUp'>I also like to solo-travel. To listen to podcasts that explain stuff. To play basketball. To watch animal documentaries.</Card.Text>
                                <Card.Text className='revealUp'>This whole thing is a work in progress. Tis' life, I suppose..</Card.Text>
                            </Col>
                            <Col sm={4} style={{
                                borderLeft: ".25rem dashed silver"
                            }}>
                                <Zoom>
                                    < Card.Img src={profile} style={{ borderRadius: '3%', width: '100%' }} />
                                </Zoom>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

            </div >
        </div >
    );
};

export default AboutMe;