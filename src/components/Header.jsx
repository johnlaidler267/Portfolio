// Style Sheets
import '../styling/Header.css'

//React
import React from 'react';

//React Components
import { Card } from "react-bootstrap";

//Custom Components
import Contact from './Contact';

// Header component: Contains my name/conctact info
const Header = () => {
    return (
        <div className='header-bg'>
            <div className="arrow">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div>
                <Card className='header-card' bsPrefix='customCard'>
                    <Card.Body>
                        <div className='justify-content-center'>
                            <Card.Title className='name'> &lt;John Laidler /&gt;</Card.Title>
                        </div>
                        <p style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>A collection of all my creative pursuits.</p>
                        <Contact />
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Header;