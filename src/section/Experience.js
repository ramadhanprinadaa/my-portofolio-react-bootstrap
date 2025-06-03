// src/components/Experience.js
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './../styles/_experience.scss';
import yarsiLogo from './../assets/experiences/yarsi.png';
import reiLogo from './../assets/experiences/riyadi.png';

function Experience() {
  return (
    <section id="experience" className="experience-section mt-3">
      <h1 className="text-center section-title mb-4">Experiences</h1>
      <Container>
        <Row className="gy-3">
          {/* Experience 1 */}
          <Col md={12}>
            <Card className="experience-card">
              <Row className="g-0">
                <Col md={3} className="text-center p-3">
                  <Card.Img src={yarsiLogo} className="experience-img" />
                </Col>
                <Col md={9}>
                  <Card.Body>
                    <Card.Title>Assistant Lecturer Object Oriented Programming - Yarsi Univeristy</Card.Title>
                    <Card.Text>
                      Assessed 50+ assignments, gave coding feedback, and developed materials on OOP, SOLID, Java Swing, Multithreading, and JDBC (MySQL).
                    </Card.Text>
                    <div className="experience-buttons">
                      <Button className="btnA me-2">Show Certificate</Button>
                      <Button 
                        variant="outline-primary"
                        href="https://www.linkedin.com/in/ramadhan-prinada/">Go to LinkedIn</Button>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>

          {/* Experience 2 */}
          <Col md={12}>
            <Card className="experience-card">
              <Row className="g-0">
                <Col md={3} className="text-center p-3">
                  <Card.Img src={reiLogo} className="experience-img" />
                </Col>
                <Col md={9}>
                  <Card.Body>
                    <Card.Title>Intern Data Entry - Riyadi Emart Indonesia</Card.Title>
                    <Card.Text>
                      Performed data entry using Microsoft Excel and maintained content in the back-end system.
                    </Card.Text>
                    <div className="experience-buttons">
                      <Button className="btnA me-2">Show Certificate</Button>
                      <Button variant="outline-primary"
                        href="https://www.linkedin.com/in/ramadhan-prinada/">Go to LinkedIn</Button>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Experience;
