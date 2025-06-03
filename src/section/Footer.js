import { Container, Row, Col } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
    return (
        <footer className="text-white py-4 mt-auto bg-dark">
            <Container>
                <Row className="align-items-center text-center text-md-start">
                    
                    {/* Sosial Media */}
                    <Col xs={12} md={3} className="mb-3 mb-md-0">
                        <div>
                            <a href="https://instagram.com" className="text-white me-3" target="_blank" rel="noreferrer">
                                <i className="fab fa-instagram fa-lg"></i>
                            </a>
                            <a href="https://github.com" className="text-white me-3" target="_blank" rel="noreferrer">
                                <i className="fab fa-github fa-lg"></i>
                            </a>
                            <a href="https://facebook.com" className="text-white me-3" target="_blank" rel="noreferrer">
                                <i className="fab fa-facebook fa-lg"></i>
                            </a>
                            <a href="https://x.com" className="text-white" target="_blank" rel="noreferrer">
                                <i className="fab fa-x-twitter fa-lg"></i>
                            </a>
                            <a href="https://linkedin.com" className="text-white" target="_blank" rel="noreferrer">
                                <i className="fab fa-linkedin fa-lg"></i>
                            </a>
                        </div>
                    </Col>

                    {/* Copyright */}
                    <Col xs={12} md={5} className="copyright mb-3 mb-md-0 d-flex justify-content-center align-items-center">
                        <div>
                            © {new Date().getFullYear()} <a href="https://ramadhanprinada.com" className="text-white text-decoration-none fw-bold">ramadhanprinada.com</a> · All rights reserved.
                        </div>
                    </Col>

                    {/* Logo */}
                    <Col xs={12} md={4} className="d-flex justify-content-center justify-content-md-end">
                        <span className="logo fw-bold">Ramadhan Prinada</span>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
