import { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './../styles/main.scss';

function MyNavbar() {
  const [activeLink, setActiveLink] = useState('#hero'); // default active

  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  return (
    <Navbar sticky="top" expand="lg" className="navbar-text bg-light">
      <Container className="d-flex justify-content-between align-items-center navbar">
        {/* Logo */}
        <Navbar.Brand href="#hero" className="logo d-flex align-items-center gap-2">
          <span className="fw-bold">Ramadhan Prinada</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navigation Links */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mx-auto text-center gap-3 nav-links">
            <Nav.Link 
              href="#hero" 
              className={activeLink === '#hero' ? 'active' : ''} 
              onClick={() => handleNavClick('#hero')}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              href="#about" 
              className={activeLink === '#about' ? 'active' : ''} 
              onClick={() => handleNavClick('#about')}
            >
              About
            </Nav.Link>
            <Nav.Link 
              href="#project" 
              className={activeLink === '#project' ? 'active' : ''} 
              onClick={() => handleNavClick('#project')}
            >
              Projects
            </Nav.Link>
            <Nav.Link 
              href="#experience" 
              className={activeLink === '#experience' ? 'active' : ''} 
              onClick={() => handleNavClick('#experience')}
            >
              Experience
            </Nav.Link>
            <Nav.Link 
              href="#contact" 
              className={activeLink === '#contact' ? 'active' : ''} 
              onClick={() => handleNavClick('#contact')}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Right Button */}
        <div className="d-none d-lg-block">
          <Button variant="outline-dark" className="connect-button">
            Let's Connect
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
