import React from 'react';
import { Card, Container, Col, Row, InputGroup, Form, Button } from "react-bootstrap";
import '../styling/DirectContact.css'

// Contact information component: to go under the page header
const DirectContact = () => {
    return (
        <div className='direct-contact-bg'>
            <div className='direct-contact-div'>
                <>
                    <Form.Label>Send me a message! Hatemail! Love letters! Or, ya know, professional matters.</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>First/Last</InputGroup.Text>
                        <Form.Control aria-label="First name" />
                        <Form.Control aria-label="Last name" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="last">Organization (Optional)</InputGroup.Text>
                        <Form.Control
                            aria-label="last"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>

                    <InputGroup>
                        <InputGroup.Text>Message</InputGroup.Text>
                        <Form.Control as="textarea" aria-label="With textarea" />
                    </InputGroup>
                </>
            </div>
        </div >
    );
};

export default DirectContact;
