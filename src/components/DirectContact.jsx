import { useRef, useState, React } from 'react';
import { Card, Container, Col, Modal, InputGroup, Form, Button } from 'react-bootstrap';
import '../styling/DirectContact.css';

//Import ICONS
import { FaEnvelope } from 'react-icons/fa';
import { MdOutlineConnectWithoutContact } from 'react-icons/md';
import emailjs from '@emailjs/browser';

// Contact information component: to go under the page header
const DirectContact = () => {
	const form = useRef(); //Creates special memory space to remember the form in the computer.
	const [visible, setVisible] = useState(false); // State to control modal visibility

	const handleSubmission = (e) => {
		//stop a browser's default behavior for an event, enabling custom actions to be executed instead.
		e.preventDefault();

		// send email to myself through emailjs API
		emailjs.sendForm('jy-portfolio', 'template_ae3uwin', form.current, 'nqhBwzVigKsL0dcN1').then(
			(result) => {
				console.log(form.current.elements);
			},
			(error) => {
				console.log(error.text);
			}
		);

		//clear the form contents
		form.current.reset();

		//make a congratualtory modal pop-up
		setVisible(true);
	};

	return (
		<div className="direct-contact-bg" id="direct-contact">
			<div className="direct-contact-div">
				<>
					{/* Contact Form Header */}
					<h5 className="revealUp contact-form-header">
						Get in Touch! <MdOutlineConnectWithoutContact />
					</h5>

					{/* Contact Form */}
					<Form id="contact-form" ref={form} onSubmit={handleSubmission}>
						<Form.Label style={{ color: '#adbdcc' }} className="revealUp">
							Send me a message! Hatemail! Love letters! Or, ya know, professional matters.
						</Form.Label>
						<div className="revealUp" style={{ width: '100%', justifyItems: 'center' }}>
							<InputGroup className="mb-3">
								<InputGroup.Text>First/Last</InputGroup.Text>
								<Form.Control name="first" className="form-control" aria-label="First name" type="name" pattern="[a-zA-Z]*" required />
								<Form.Control name="last" className="form-control" aria-label="Last name" type="name" pattern="[a-zA-Z]*" required />
							</InputGroup>

							<InputGroup className="mb-3">
								<InputGroup.Text>Email</InputGroup.Text>
								<Form.Control name="email" className="form-control" aria-label="email" type="email" pattern="[a-z@a-z]*" required />
							</InputGroup>

							<InputGroup>
								<InputGroup.Text style={{ height: '10rem' }}>Message</InputGroup.Text>
								<Form.Control name="message" as="textarea" aria-label="With textarea" pattern="[a-zA-Z]*" required />
							</InputGroup>

							<div className="w-100 d-flex justify-content-center">
								<Button type="submit" className="send-btn">
									Send
								</Button>
							</div>
						</div>
					</Form>
				</>

				{/* My Email (johnmlaidler) displayed below */}
				<div className="my-email">
					<p>
						<FaEnvelope style={{ margin: '2px' }} /> johnmlaidler@comcast.net
					</p>
				</div>
			</div>

			{/* Congratualory Modal Upon Submission */}
			<Modal show={visible} onHide={() => setVisible(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Thanks :D</Modal.Title>
				</Modal.Header>
				<Modal.Body>Your message has been sucessfully sent!</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={() => setVisible(false)}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default DirectContact;
