import React from 'react';

//React bootstrap components
import { Card, Col, Row } from "react-bootstrap";

//Image import
import profile from "../images/ProfilePic.jpg";

//CSS import
import '../styling/AboutMe.css';

const AboutMe: React.FC = () => {
    return (
        <div className='abtme-bg'>


            <Card className='abtme-card' bsPrefix="customCard">
                <Card.Body>
                    <Row>

                        <Col sm={8}>
                            <Card.Title style={{ fontSize: '2rem', padding: '1rem' }}>Who am I?</Card.Title>

                            <Card.Text>
                                Hey, my name’s Johnny. This website was built, partly for practice with React/JSX, partly to showcase some of the stuff I work on. I’m 22 years old, a graduate from the University of Massachusetts, Amherst. </Card.Text>
                            <Card.Text>I like front-end design because I’m fond on aesthetic things, and appreciate the process of watching my code come to life. My plan is to become a software engineer.</Card.Text>
                            <Card.Text>I also like to solo-travel. To listen to podcasts that explain stuff. To play basketball. To watch animal documentaries.</Card.Text>
                            <Card.Text>This whole thing is a work in progress. Tis' life, I suppose..</Card.Text>
                        </Col>

                        <Col sm={4}>
                            <Card.Img src={profile} style={{ width: '15rem' }} />
                        </Col>

                    </Row>
                </Card.Body>
            </Card>

        </div>
    );
};

export default AboutMe;