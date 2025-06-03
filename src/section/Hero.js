// src/components/Hero.js
import { Container, Row, Col, Button } from 'react-bootstrap';

import profileImg from './../assets/Ramadhan.png';
import './../styles/_hero.scss';

function Hero() {
  return (
    <section id="hero" className="hero-section mt-2">
      <Container >
        <Row className="align-items-center">
          
          {/* Gambar Profil */}
          <Col md={4} className="text-center mb-4 ms-0 mb-md-0">
            <img
              src={profileImg}
              alt="Ramadhan"
              className="hero-img rounded"
            />
          </Col>

          {/* Teks Konten */}
          <Col md={8} className="text-md-start text-center">
            <h1 className="hero-title">
              Hi, I’m <span className="highlight">Ramadhan Prinada</span> 👋
            </h1>
            <h4 className="hero-subtitle">Front-End Web Developer <span>|</span> Android Developer <span>|</span> AI Engineer</h4>
            <p className="hero-desc">
              I craft clean and responsive websites using React and Bootstrap.
              Let's collaborate to create something extraordinary!
            </p>
            <div className="hero-buttons gap-4">
              <Button className='btnResume'>Resume</Button>
              <Button className="btnProject ms-2">Project</Button>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default Hero;
