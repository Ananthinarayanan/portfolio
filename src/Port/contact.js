import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <Container>

        <h2 className="contact-title">Contact Me</h2>

        <Row className="justify-content-center g-4">

          {/* Contact Form */}
          <Col lg={6} md={6} sm={12}>
            <Card className="contact-card">
              <Card.Body>
                <Form>

                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Your message..." />
                  </Form.Group>

                  <Button variant="primary" className="w-100">
                    Send Message
                  </Button>

                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Info */}
          <Col lg={4} md={6} sm={12}>
            <Card className="contact-card text-center" style={{maxHeight:"200px"}}>
              <Card.Body>

                <h4 className="contact-heading">Contact Me</h4>

                <p className="contact-text">
                  📧 ananthinarayanan2005@gmail.com
                </p>

                <p className="contact-text">
                  📱 +91 7598348939
                </p>

                <div>
                  <a className="social-link" href="https://www.linkedin.com/in/ananthi-narayanan-a00104342?utm_source=share_via&utm_content=profile&utm_medium=member_android">LinkedIn</a>
                  <a className="social-link" href="https://github.com/Ananthinarayanan/myproject1.git ">GitHub</a>
                </div>

              </Card.Body>
            </Card>
          </Col>

        </Row>

      </Container>
    </div>
  );
};

export default Contact;