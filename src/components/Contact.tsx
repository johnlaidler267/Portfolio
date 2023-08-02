import React from 'react';
import { Card, Container, Col, Row, ListGroup } from "react-bootstrap";
import '../styling/Contact.css'
import '../styling/General.css'

// Contact information component: to go under the page header
const Contact = () => {
    return (
        <div className='contact-div'>
            <Card className='contact-card' bsPrefix='customCard'>
                <Card.Body>
                    <ListGroup horizontal>
                        <ListGroup.Item>Email: johnmlaidler@comcast.net</ListGroup.Item>
                        <ListGroup.Item>Phone: +1 (774) 273-0266</ListGroup.Item>
                        <ListGroup.Item>City: Sharon, MA, USA</ListGroup.Item>
                        <ListGroup.Item>LinkedIn: jlaidler</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Contact;
