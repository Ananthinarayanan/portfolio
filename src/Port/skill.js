import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import './skill.css';
import { useNavigate } from "react-router-dom";

export default function Skillport() {

  const skills = [
    { name: "HTML", icon: <FaHtml5 className="skill-icon html" /> },
    { name: "CSS", icon: <FaCss3Alt className="skill-icon css" /> },
    { name: "JavaScript", icon: <FaJs className="skill-icon js" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="skill-icon bootstrap" /> },
    { name: "React JS", icon: <FaReact className="skill-icon react" /> },
    { name: "MongoDB", icon: <SiMongodb className="skill-icon mongo" /> }
  ];
 
  return (
    <div className="skill-section">
      <Container>
        <h2 className="skill-title text-center">Skills</h2>

        <Row className="justify-content-center">
          {skills.map((skill, index) => (
            <Col xs={12} sm={6} md={4} lg={4} key={index} className="mb-4">
              <Card className="skill-card text-center p-4">
                <div className="icon">{skill.icon}</div>
                <Card.Body>
                  <Card.Title>{skill.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}