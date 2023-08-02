import '../styling/Header.css'
import React from 'react';
import { Card, Container, Button } from "react-bootstrap";
import Contact from './Contact';
import bg from '../images/travelbg.png'

const Header = () => {
    return (
        <div className='header-bg'>

            <Card className='header-card' bsPrefix='customCard'>
                <Card.Body>
                    <Card.Title className='name'  >John Laidler</Card.Title>
                    <p style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>A collection of all my creative pursuits.</p>
                    <Contact />
                </Card.Body>
            </Card>

        </div>
    );
};

export default Header;