import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaGithub } from 'react-icons/fa';
import './../styles/_contact.scss';

function Contact() {
  return (
    <section id="contact" className="contact-section mt-3 mb-5">
      <Container>
        <h1 className="text-center section-title mb-3">Contact Me</h1>
        <h4 className="text-center mb-4">Let’s Collaborate!</h4>

        <Row className="mt-2 ms-3 me-3 justify-content-center">
          {/* Form Contact */}
          <Col md={6}>
            <div className="contact-form">
                    <Form
                    action="mailto:muhr69271@gmail.com"
                    method="POST"
                    encType="text/plain"
                    >
                    {/* Full Name */}
                    <div className="form-floating mb-3">
                        <Form.Control type="text" name="Name" id="formName" placeholder="Enter your name" required />
                        <Form.Label htmlFor="formName">Full Name</Form.Label>
                    </div>

                    {/* Email */}
                    <div className="form-floating mb-3">
                        <Form.Control type="email" name="Email" id="formEmail" placeholder="name@example.com" required />
                        <Form.Label htmlFor="formEmail">Email Address</Form.Label>
                    </div>

                    {/* Subject */}
                    <div className="form-floating mb-3">
                        <Form.Control type="text" name="Subject" id="formSubject" placeholder="Subject" />
                        <Form.Label htmlFor="formSubject">Subject</Form.Label>
                    </div>

                    {/* Message */}
                    <div className="form-floating mb-4">
                        <Form.Control as="textarea" name="Message" id="formMessage" placeholder="Enter your message" style={{ height: '10rem' }} required />
                        <Form.Label htmlFor="formMessage">Message</Form.Label>
                    </div>

                    <div className="d-grid">
                        <Button variant="success" type="submit" size="lg">
                        Send Message
                        </Button>
                    </div>
                    </Form>
            </div>
          </Col>


          {/* Contact Info */}
          <Col md={6} className="contact-info">
            <div className="info-item">
              <FaEnvelope className="icon" />
              <span>muhr69271@gmail.com</span>
            </div>
            <div className="info-item">
              <FaPhone className="icon" />
              <span>+62 858-9326-8065</span>
            </div>
            <div className="info-item">
              <FaLinkedin className="icon" />
              <a href="https://www.linkedin.com/in/ramadhan-prinada/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
            <div className="info-item">
              <FaInstagram className="icon" />
              <a href="https://instagram.com/ramadhhnnp" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </div>
            <div className="info-item">
              <FaGithub className="icon" />
              <a href="https://github.com/ramadhanprinadaa" target="_blank" rel="noreferrer">
                Github
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
