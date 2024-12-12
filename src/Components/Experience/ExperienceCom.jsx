import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./experience.css"; // Custom CSS for additional styling

const Experience = () => {
  return (
    <div className="experience-page py-5">
      <Container>
        <h2 className="text-center title mb-4">
          <a
            href="https://aquera.com"
            target="_blank"
            rel="noopener noreferrer"
            className="company-link"
          >
            Aquera Labs | June 18, 2023 - Present
          </a>
        </h2>

        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <Card className="experience-card shadow-sm rounded">
              <Card.Body>
                <Card.Text className="content-text">
                  I am currently working at Aquera Labs, focusing on building SCIM connectors for major enterprises. My role involves integrating various systems for seamless user provisioning. I work closely with teams to create integrations that are robust and scalable, helping businesses manage their user data more efficiently.
                </Card.Text>

                <Card.Text className="content-text">
                  As part of my role, I have worked on connectors for the following companies:
                  <br />
                  <strong>Adobe, Oracle, Dynamic 365, DocuSign, TalentLMS, AWS Redshift, MySQL</strong>.
                </Card.Text>

                <Card.Text className="content-text">
                  Some of my key contributions at Aquera Labs include:
                  <ul>
                    <li>Designing and building SCIM connectors to automate user provisioning and deactivation for clients.</li>
                    <li>Working with technologies such as Okta and Salesforce to streamline identity management across different platforms.</li>
                    <li>Collaborating with cross-functional teams to ensure seamless integrations with enterprise applications.</li>
                    <li>Optimizing the performance and scalability of connectors, ensuring they meet the needs of large-scale businesses.</li>
                    <li>Providing ongoing support and maintenance for connectors, ensuring they continue to function as expected as technologies evolve.</li>
                  </ul>
                </Card.Text>

                <Card.Text className="content-text">
                  Aquera Labs specializes in providing scalable identity management solutions, and I am proud to be part of a team that works on the cutting edge of user provisioning technology. Our solutions help companies integrate their identity systems across platforms, ensuring smooth data flows and secure management of user access.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Experience;
