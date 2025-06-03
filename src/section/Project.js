// src/components/Project.js
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './../styles/_project.scss';
import githubLogo from './../assets/github.png';

function Project() {
  return (
    <section id="project" className="project-section mt-4 p-4">
      <Container>
        <h1 className="text-center section-title mb-4">Projects</h1>
        <Row className="justify-content-center text-center mx-auto g-4">
          {/* Project 1: Anemicare AI Model */}
          <Col md={4} className="mb-4 d-flex justify-content-center">
            <Card style={{ width: '100%', maxWidth: '20rem' }}>
              <Card.Img variant="top" src={githubLogo} alt="Anemicare AI" />
              <Card.Body>
                <Card.Title>Anemicare - AI Model</Card.Title>
                <Card.Text>
                  AI model to predict anemia level using image classification during Bangkit 2024 capstone.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/ramadhanprinada/Anemicare"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Project 2: Android Photo Upload App */}
          <Col md={4} className="mb-4 d-flex justify-content-center">
            <Card style={{ width: '100%', maxWidth: '20rem' }}>
              <Card.Img variant="top" src={githubLogo} alt="Android App" />
              <Card.Body>
                <Card.Title>Kobaa - Android App</Card.Title>
                <Card.Text>
                  Android app similar to Instagram for uploading and sharing photos using Firebase backend.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/ramadhanprinada/PhotoShare"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Project 3: React + Bootstrap Website */}
          <Col md={4} className="mb-4 d-flex justify-content-center">
            <Card style={{ width: '100%', maxWidth: '20rem' }}>
              <Card.Img variant="top" src={githubLogo} alt="Portfolio Website" />
              <Card.Body>
                <Card.Title>Portfolio Website</Card.Title>
                <Card.Text>
                  Personal portfolio website built using React and Bootstrap showcasing my projects and skills.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/ramadhanprinada/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Project;
