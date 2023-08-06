import React from 'react';
import { Card, Container, Col, Row, InputGroup, Form, Button } from "react-bootstrap";
import '../styling/DirectContact.css'
//ICONS
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// Contact information component: to go under the page header
const DirectContact = () => {
    return (
        <div className='direct-contact-bg' id='direct-contact'>
                <div className='direct-contact-div'>
                    <>
                        <h5 style={{ fontWeight: 'bold', fontSize: '2rem' }}>Get in Touch!</h5>
                        <Form.Label className='revealUp'>Send me a message! Hatemail! Love letters! Or, ya know, professional matters.</Form.Label>
                        <div className='revealUp' style={{ width: '100%', justifyItems: 'center' }}>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>First/Last</InputGroup.Text>
                                <Form.Control aria-label="First name" />
                                <Form.Control aria-label="Last name" />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="last">Email</InputGroup.Text>
                                <Form.Control
                                    aria-label="last"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>

                            <InputGroup>
                                <InputGroup.Text style={{ height: '10rem' }}>Message</InputGroup.Text>
                                <Form.Control as="textarea" aria-label="With textarea" />
                            </InputGroup>
                            <Button className='send-btn'>Send</Button>
                        </div>
                    </>
                    <div className='my-email'>
                        <p><FaEnvelope style={{ margin: '2px' }} /> johnmlaidler@comcast.net</p>
                    </div>
                </div>
        </div >
    );
};

export default DirectContact;
