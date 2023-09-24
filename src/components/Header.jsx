//React
import React from 'react';

//React Components
import { Card } from 'react-bootstrap';

// Style Sheets
import '../styling/Header.css';

//Custom Components
import Contact from './Contact';

// Header component: Contains my name/conctact info
const Header = () => {
	return (
		<div id="header-bg">
			<a className="arrow" href="#abtme-bg">
				<span></span>
				<span></span>
				<span></span>
			</a>

			<div>
				<Card id="header-card" bsPrefix="customCard">
					<Card.Body>
						<div>
							<Card.Title className="name revealUp"> &lt;John Laidler /&gt;</Card.Title>
						</div>
						<div className="d-flex justify-content-center">
							<p className="revealUp" id="header-description">
								A collection of creative & academic pursuits.
							</p>
						</div>
						<Contact />
					</Card.Body>
				</Card>
			</div>
		</div>
	);
};

export default Header;
