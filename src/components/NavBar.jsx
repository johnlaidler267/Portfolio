import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../styling/NavBar.css';

const resume = 'https://drive.google.com/file/d/1i7SGUApOT-_8pI5YLY6KMdhzILGZh2a2/view?usp=drive_link';

const MyNavbar = () => {
	return (
		<Navbar className="navbar navbar-blur" sticky="top" expand="lg">
			<div className="navbar-left">
				<Navbar.Brand href="/">John Laidler</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbar-nav" />
			</div>
			<div className="navbar-right">
				<Navbar.Collapse id="navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href={resume} target="_blank">
							Resume
						</Nav.Link>
						<Nav.Link href="#portfolio">Works</Nav.Link>
						<Nav.Link href="#direct-contact">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
};

export default MyNavbar;
