import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./education.css";
import { useNavigate } from "react-router-dom";
import Cert from "./cert";




export default function Education() {

const navigate = useNavigate();

const openCertificate = () => {
  navigate("/certificate");
};

     return (
    <div className="education-section">

      <h2 className="edu-title">Education</h2>

      <Container>
        <Row className="justify-content-center edu-row g-4">

          <Col lg={5} md={6} sm={12}>
            <Card className="edu-card" >
              <Card.Body>
                <h4 className="edu-heading">B.Sc Computer Science</h4>
                <p className="edu-sub">MS University – St. Hindu College</p>
                <p className="edu-text">Year: 2022 - 2025</p>
                <p className="edu-text">CGPA: 7.26</p>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={5} md={6} sm={12}>
            <Card className="edu-card" >
              <Card.Body>
                <h4 className="edu-heading">Java Full Stack Development Course</h4>
                <p className="edu-sub">Training Institute</p>
                <p className="edu-text">
                  Learned frontend and backend fundamentals including
                  HTML, CSS, JavaScript, Bootstrap, React and MongoDB.
                </p>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>

      {/* Certificates */}
       <div className="certificate-section">
        <h2 className="cert-title">Certificates</h2>
        {/* <img src="./java certificate.png" alt="java certificate"></img> */}
        <button onClick={openCertificate}>
          👉 Open my Certificates
        </button>

      </div>
    </div>
  );
}