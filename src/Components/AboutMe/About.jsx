import React from "react";
import "./about.css"; // Import custom CSS
import { Container, Row, Col, Card } from "react-bootstrap"; // Bootstrap components
import { skills } from "../../assets/skill";
const About = () => {
  return (
    <Container className="about-container">
      {/* About Me Section */}
      <Row className="about-section my-5">
        <Col md={12}>
          <Card className="about-card">
            <Card.Body>
              <h2 className="about-title">About Me</h2>
              <p className="about-description">
                Hi, I'm <strong>Shiv Raj Singh</strong>, a passionate Full Stack
                Developer. I specialize in creating responsive web applications
                using modern technologies. I love to solve complex problems and
                build scalable backend systems and intuitive front-end designs.
                Always eager to learn and adapt to new technologies, I strive to
                keep up with the latest trends in web development.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Skills Section */}
      <Row className="skills-section my-5">
        <Col md={12}>
          <Card className="skills-card">
            <Card.Body>
              <h2 className="skills-title">Skills</h2>
              <Row className="skills-list">
                {skills.map((skill, index) => (
                  <Col sm={6} md={4} key={index} className="mb-4">
                    <Card className="skill-item">
                      <Card.Body>
                        <h5 className="skill-name">{skill.name}</h5>
                        <p className="skill-description">{skill.description}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
