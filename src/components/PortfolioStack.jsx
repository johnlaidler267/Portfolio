import React from 'react';

// Import STYLING
import '../styling/General.css';
import '../styling/PortfolioStack.css';

//Import REACT COMP.
import { Card, Container, Col, Row, Button } from 'react-bootstrap';

// Import IMAGES
import GitHub from '../images/GitHub.png';
import Spotify from '../images/Spotify.png';
import Reading from '../images/Reading.png';
import YouTube from '../images/YouTube.png';

//Import ICONS
import { PiListMagnifyingGlassBold } from 'react-icons/pi';

const PortfolioStack = () => {
	return (
		<div className="portfolio-bg d-flex justify-content-center" id="portfolio">
			<div className="portfolio-bg-slice">
				<div className="m-5 p-5 py-sm-2">
					<div className="row">
						<div className="relative">
							<h1 className="title-div revealUp d-flex align-items-center">
								<PiListMagnifyingGlassBold className="px-1" />
								Other Work.
							</h1>
							<div className="title-bg revealUp"></div>
						</div>
					</div>

					<div className="row">
						<p className="mt-3 w-75 revealUp" style={{ color: '#afbecc' }}>
							If you want to check out my other work, or see some of the projects that aren't featured, check out the links below.
						</p>
					</div>

					<div className="row py-lg-3">
						<div className="col-12 col-sm col-md-6 py-3 m-auto">
							<Card className="service-card revealUp m-2 " bsPrefix="customCard">
								<Card.Body>
									<Row>
										<Col className="service-col  ">
											<Card.Img className="service-image" src={GitHub} />
										</Col>
										<Col className="service-col">
											<div className="stack">
												<Card.Title className="title">Github</Card.Title>
												<Card.Text>See my all coding projects.</Card.Text>
												<Button className="service-btn" href="https://github.com/johnlaidler267" target="_blank">
													<span>View GitHub</span>
												</Button>
											</div>
										</Col>
									</Row>
								</Card.Body>
							</Card>
						</div>

						<div className="col-12 col-sm col-md-6  py-3 m-auto">
							<Card className="service-card revealUp m-2" bsPrefix="customCard">
								<Card.Body>
									<Row>
										<Col className="service-col">
											<Card.Img className="service-image" src={YouTube} />
										</Col>
										<Col className="service-col">
											<div className="stack">
												<Card.Title className="title">YouTube</Card.Title>
												<Card.Text>Watch my tutorials and vlogs.</Card.Text>
												<Button className="service-btn" href="https://www.youtube.com/@johnnylaidler" target="_blank">
													<span>View YouTube</span>
												</Button>
											</div>
										</Col>
									</Row>
								</Card.Body>
							</Card>
						</div>
					</div>

					<div className="row ">
						<div className="col-12 col-sm col-md-6 py-3 m-auto">
							<Card className="service-card revealUp  m-2" bsPrefix="customCard">
								<Card.Body>
									<Row>
										<Col className="service-col">
											<Card.Img className="service-image" src={Spotify} />
										</Col>
										<Col className="service-col">
											<div className="stack">
												<Card.Title className="title">Spotify</Card.Title>
												<Card.Text>What I'm listening to right now.</Card.Text>
												<Button className="service-btn" href="https://open.spotify.com/user/31ku4khylun5eommfyx6uahejxyq" target="_blank">
													<span>View Spotify</span>
												</Button>
											</div>
										</Col>
									</Row>
								</Card.Body>
							</Card>
						</div>

						<div className="col-12 col-sm col-md-6 py-3  m-auto">
							<Card className="service-card revealUp m-2" bsPrefix="customCard">
								<Card.Body>
									<Row>
										<Col className="service-col">
											<Card.Img className="service-image" src={Reading} />
										</Col>
										<Col className="service-col">
											<div className="stack">
												<Card.Title className="title">Reading</Card.Title>
												<Card.Text>Check out what I'm reading.</Card.Text>
												<Button className="service-btn" href="https://spiral-soapwort-311.notion.site/9bb0e99a31114300bf6ceafbf8bf4940?v=360fb1cb913f49bbb901c01d531eace5&pvs=4">
													<span>View Reading</span>
												</Button>
											</div>
										</Col>
									</Row>
								</Card.Body>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PortfolioStack;
