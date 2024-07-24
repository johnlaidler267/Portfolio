import React from 'react';
import '../styling/Projects.css';

//ICONS
import { FaProjectDiagram } from 'react-icons/fa';

//IMAGES
import DebateMe from '../images/DebateMe.png';
import Connect4 from '../images/Connect4.png';
import StudentLifter from '../images/StudentLifter.png';

const styles = {
	projectsContainer: {
		backgroundColor: 'lightgray',
	},
	projectContainer: {
		borderLeft: '2px dashed darkgray',
	},
	descriptionContainer: {
		flex: 1,
		paddingBottom: '2rem',
		whiteSpace: 'pre-line',
	},
	image: {
		flex: 1,
		maxWidth: '100%',
		aspectRatio: '1/1',
		objectFit: 'contain',
	},
	title: {
		marginTop: '1rem',
		marginBottom: '1rem',
	},
	subtitle: {
		color: '#425466',
	},
	bubblesContainer: {
		display: 'flex',
		marginBottom: '1rem',
		marginTop: '1rem',
	},
	bubble: {
		marginRight: '1rem',
		padding: '0.75rem',
		borderRadius: '40%',
		backgroundColor: 'rgb(17 24 39)',
		boxShadow: '0px 0px 7px white',
		height: 'fit-content',
		width: 'fit-content',
		fontSize: '2vmin',
		color: 'white',
	},
	description: {
		marginBottom: '1rem',
	},
};

const projects = [
	{
		title: 'StudentLifter',
		subtitle: 'An athleisure e-commerce platform.',
		technologies: ['React', 'Node.js', 'MongoDB'],
		description:
			'\n► Designed and implemented a robust e-commerce platform from scratch, utilizing MongoDB to efficiently store and manage customer information and product data.\n► Integrated features such as cart and checkout services, order history and wishlists, product search functionality, and more. \n► Implemented a secure authentication system using Firebase, safeguarding user accounts, and ensuring securedata transfer.',
		githubLink: 'https://github.com/johnlaidler267/StudLift',
		imageLink: StudentLifter,
	},
	{
		title: 'DebateMe',
		subtitle: 'A website to host civil debates.',
		technologies: ['React', 'Node.js', 'MongoDB', 'Axios'],
		description:
			' ► Designed and developed a full-stack web application that serves as an online platform for moderated debates. \n ► Employed PostgreSQL to manage data pertaining to debate threads, voting results, and user’s activity history.\n► Implemented a RESTful API using Express, and CRUD operations with Axios.\n► Utilized Docker for streamlined deployment and containerization.',
		githubLink: 'https://github.com/johnlaidler267/DebateMe',
		imageLink: DebateMe,
	},
	{
		title: 'Connect4 Bot',
		subtitle: 'A website to host civil debates.',
		technologies: ['Python'],
		description:
			'► Devised a bot which relies on a custom utility heuristic to determine an optimal move given a Connect4 game state.\n► Utilized a Minimax algorithm with lookahead limit and optimized it using alpha-beta pruning to reduce search time.',
		githubLink: '',
		imageLink: Connect4,
	},
];

const Projects = () => {
	return (
		<div id="projects-bg">
			<div style={{ width: '90%' }}>
				<div className="w-100 relative d-flex justify-content-start">
					<h2 className="revealUp" id="projects-title">
						<FaProjectDiagram className="mx-3" />
						Featured Projects
						<div className="title-bg"></div>
					</h2>
				</div>
				<div className="revealUp" id="projectsContainer">
					{projects.map((project, index) => (
						<Project key={index} project={project} />
					))}
				</div>
			</div>
		</div>
	);
};

const Project = ({ project }) => {
	return (
		<div className="row m-auto" id="projectContainer">
			<div className="col col-12 col-md-7 m-auto">
				<div id="descriptionContainer">
					<h2 className="title">
						<b>{project.title}</b>
					</h2>

					<h6 className="subtitle">{project.subtitle}</h6>

					<div id="bubblesContainer">
						{project.technologies.map((tech, index) => (
							<div key={index} className="bubble">
								{tech}
							</div>
						))}
					</div>

					<p className="description">{project.description}</p>
					{project.githubLink !== '' && (
						<a className="d-flex gh-button" href={project.githubLink}>
							Github Repo
						</a>
					)}
				</div>
			</div>
			<div className="d-flex justify-content-center col-12 col-md-5 m-auto">
				<img src={project.imageLink} alt={project.title} className="image" />
			</div>
		</div>
	);
};

export default Projects;
