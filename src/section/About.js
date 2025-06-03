import { Container, Row, Col } from 'react-bootstrap';
import './../styles/_about.scss';
import yarsiLogo from './../assets/educations/yarsi.png';
import bangkitLogo from './../assets/educations/bangkit.png';
import nqLogo from './../assets/educations/nq.png';

import footballLogo from './../assets/hobbies/football-stadium-svgrepo-com.png';
import codingLogo from './../assets/hobbies/coding-svgrepo-com.png';
import readingLogo from './../assets/hobbies/reading-svgrepo-com.png';
import runningLogo from './../assets/hobbies/running-svgrepo-com.png';
import swimmingLogo from './../assets/hobbies/swimming-svgrepo-com.png';

function About() {
  return (
    <section id="about" className="about-section mt-4" >
      <Container>
        <h1 className="text-center section-title">About Me</h1>

        <Row className="mt-0 ms-3 me-3">
          <Col>
            <p>
              I am a passionate software developer with a strong interest in building modern web applications.
              My focus is on creating clean, efficient, and user-friendly interfaces using the latest technologies.
              I love learning and continuously improving my skills to stay up-to-date with the tech world.
            </p>
          </Col>
        </Row>

        <Row className="mt-2 ms-3 me-3 justify-content-center">
          {/* Education */}
          <Col xs={12} md={4} lg={4} className="section-card text-center me-2">
            <h4 className="text-center mb-4">Education</h4>
            <ul className="list-unstyled">
              <li className="mb-3 text-center">
                <a href="https://www.yarsi.ac.id" target="_blank" rel="noopener noreferrer">
                  <img 
                    src={yarsiLogo}
                    alt="YARSI University Logo" 
                    width="150" 
                    className="img-fluid mb-2"
                  />
                </a>
                <p className="text-center mb-0 fw-bold">YARSI University</p>
                <small>Informatics Engineering (2021 - Present)</small>
              </li>

              <li className="mb-2 text-center">
                <a href="https://grow.google/intl/id_id/bangkit/" target="_blank" rel="noopener noreferrer">
                  <img 
                    src={bangkitLogo}
                    alt="Bangkit Academy Logo" 
                    width="100" 
                    className="img-fluid mb-2"
                  />
                </a>
                <p className="text-center mb-0 fw-bold">Bangkit Academy by Google</p>
                <small>Machine Learning Cohort (Sep 2024 - Jan 2025)</small>
              </li>

              <li className="mb-1 text-center">
                <a href="https://nurul-quran.sch.id/" target="_blank" rel="noopener noreferrer">
                  <img 
                    src={nqLogo}
                    alt="MA Nuurul Qur'an Logo" 
                    width="100" 
                    className="img-fluid mb-2"
                  />
                </a>
                <p className="text-center mb-0 fw-bold">MA Nuurul Qur'an Ciangsana</p>
                <small>Islamic Senior High School (2019 - 2021)</small>
              </li>
            </ul>
          </Col>

          {/* Tech Stack */}
          <Col xs={12} md={4} lg={4} className="section-card text-center me-2">
            <h4 className="mb-4">Tech Stack</h4>
            <Row className="g-3 g-sm-4 justify-content-center">

              <Col xs={4} className="d-flex justify-content-center mb-3">
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="60" alt="HTML" />
                </a>
              </Col>
              <Col xs={4} className="d-flex justify-content-center">
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="60" alt="CSS" />
                </a>
              </Col>
              <Col xs={4} className="d-flex justify-content-center">
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="60" alt="JavaScript" />
                </a>
              </Col>

              <Col xs={4} className="d-flex justify-content-center mb-3">
                <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width="60" alt="Python" />
                </a>
              </Col>
              <Col xs={4} className="d-flex justify-content-center">
                <a href="https://www.java.com/" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" width="60" alt="Java" />
                </a>
              </Col>
              <Col xs={4} className="d-flex justify-content-center">
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="60" alt="ReactJS" />
                </a>
              </Col>

              <Col xs={4} className="d-flex justify-content-center mb-3">
                <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width="60" alt="VSCode" />
                </a>
              </Col>
              <Col xs={4} className="d-flex justify-content-center">
                <a href="https://www.tensorflow.org/" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" width="60" alt="TensorFlow" />
                </a>
              </Col>
              <Col xs={4} className="d-flex justify-content-center">
                <a href="https://jupyter.org/" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" width="60" alt="JupyterLab" />
                </a>
              </Col>

              <Col xs={4} className="d-flex justify-content-center mb-3">
                <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="60" alt="MySQL" />
                </a>
              </Col>
              <Col xs={4} className="d-flex justify-content-center">
                <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" width="60" alt="PostgreSQL" />
                </a>
              </Col>
            </Row>
          </Col>

          {/* Hobbies */}
          <Col xs={12} md={4} lg={4} className="section-card text-center">
            <h4 className="text-center mb-4">Hobbies</h4>
            <ul className="list-unstyled d-grid gap-2">
              <li className="d-flex align-items-center gap-2">
                <img src={footballLogo} width="24" alt="Football" />
                <span>Playing Football</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <img src={runningLogo} width="24" alt="Running" />
                <span>Running</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <img src={swimmingLogo} width="24" alt="Swimming" />
                <span>Swimming</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <img src={codingLogo} width="24" alt="Coding" />
                <span>Coding</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <img src={readingLogo} width="24" alt="Reading" />
                <span>Reading</span>
              </li>
            </ul>
          </Col>

        </Row>

      </Container>
    </section>
  );
}

export default About;