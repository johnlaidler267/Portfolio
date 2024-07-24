//REACT
import React from 'react';

//STYLING
import '../styling/AboutMe.css';

//REACT BOOTSTRAP
import { Card, Col, Row } from 'react-bootstrap';

//IMAGES
import profile from '../images/ProfilePic.png';

//ABOUT ME: My profile picture, and a short description.
const AboutMe = () => {
	return (
		<div className="d-flex justify-content-center" id="abtme-bg">
			<Card className="p-lg-5 p-md-3 my-2 " id="abtme-card" bsPrefix="customCard">
				<Card.Body>
					<Row className="d-flex justify-content-center align-items-center m-auto">
						<Col md={4} sm={10} xs={12}>
							<Card.Img id="abtme-img" className="revealUp" variant="top" src={profile} />
						</Col>
						<Col md={8} sm={12} xs={12}>
							<div className="relative my-3 abtme-title-div">
								<h3 className="revealUp" id="abtme-title">
									..Who am I?
									<div className="title-bg"></div>
								</h3>
							</div>

							<Card.Text className="revealUp abtme-text">
								Hey, my name’s <b>Johnny</b>. This website was built, partly for practice with React/JSX, partly to showcase some of the stuff I work on. I’m 22 years old, a graduate from the{' '}
								<b>University of Massachusetts, Amherst.</b>
							</Card.Text>
							<Card.Text className="revealUp abtme-text">
								I like front-end design because I’m fond on aesthetic things, and appreciate the process of watching my code come to life. My plan is to become a <b>software engineer.</b>
							</Card.Text>
							<Card.Text className="revealUp abtme-text">I also like to solo-travel. To listen to podcasts that explain stuff. To play basketball. To watch animal documentaries.</Card.Text>
							<Card.Text className="revealUp abtme-text mb-3">This whole thing is a work in progress. Tis' life, I suppose..</Card.Text>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</div>
	);
};

export default AboutMe;
