import { useRef, React } from "react";
import {
  Card,
  Container,
  Col,
  Row,
  InputGroup,
  Form,
  Button,
} from "react-bootstrap";
import "../styling/DirectContact.css";
//ICONS
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

// Contact information component: to go under the page header
const DirectContact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "jy-portfolio",
        "template_ae3uwin",
        form.current,
        "nqhBwzVigKsL0dcN1"
      )
      .then(
        (result) => {
          console.log(form.current.elements.value);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="direct-contact-bg" id="direct-contact">
      <div className="direct-contact-div">
        <>
          <h5
            className="revealUp"
            style={{ fontWeight: "bold", fontSize: "2rem" }}
          >
            Get in Touch!
          </h5>
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Label className="revealUp">
              Send me a message! Hatemail! Love letters! Or, ya know,
              professional matters.
            </Form.Label>
            <div
              className="revealUp"
              style={{ width: "100%", justifyItems: "center" }}
            >
              <InputGroup className="mb-3">
                <InputGroup.Text>First/Last</InputGroup.Text>
                <Form.Control
                  name="first"
                  aria-label="First name"
                  type="name"
                />
                <Form.Control name="last" aria-label="Last name" type="name" />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text>Email</InputGroup.Text>
                <Form.Control name="email" aria-label="email" type="email" />
              </InputGroup>

              <InputGroup>
                <InputGroup.Text style={{ height: "10rem" }}>
                  Message
                </InputGroup.Text>
                <Form.Control
                  name="message"
                  as="textarea"
                  aria-label="With textarea"
                />
              </InputGroup>
              <Button type="submit" className="send-btn">
                Send
              </Button>
            </div>
          </Form>
        </>
        <div className="my-email">
          <p>
            <FaEnvelope style={{ margin: "2px" }} /> johnmlaidler@comcast.net
          </p>
        </div>
      </div>
    </div>
  );
};

export default DirectContact;
