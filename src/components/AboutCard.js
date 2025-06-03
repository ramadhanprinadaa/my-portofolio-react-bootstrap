import { Col, Row } from "react-bootstrap";

function AboutCard({ title, type, items }) {
  return (
    <Col xs={12} md={4} lg={4} className="section-card text-center">
      <h4 className="mb-4">{title}</h4>

      {/* Education */}
      {type === "education" && (
        <ul className="list-unstyled">
          {items.map((item, index) => (
            <li key={index} className="mb-3 text-center">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.logo} alt={item.name} width="100" className="img-fluid mb-2" />
              </a>
              <p className="fw-bold mb-0">{item.name}</p>
              <small>{item.desc}</small>
            </li>
          ))}
        </ul>
      )}

      {/* Tech Stack */}
      {type === "tech" && (
        <Row className="g-3 justify-content-center">
          {items.map((item, index) => (
            <Col key={index} xs={4} className="d-flex justify-content-center">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.logo} alt={item.name} width="50" />
              </a>
            </Col>
          ))}
        </Row>
      )}

      {/* Hobbies */}
      {type === "hobbies" && (
        <ul className="list-unstyled d-grid gap-2">
          {items.map((item, index) => (
            <li key={index} className="d-flex align-items-center gap-2 justify-content-center">
              <img src={item.logo} width="24" alt={item.name} />
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      )}
    </Col>
  );
}

export default AboutCard;