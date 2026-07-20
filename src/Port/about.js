import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Aboutport() {
  return (
    <Container
      id="about"
      className="fade-in"
      style={{ padding: "60px 20px", marginTop: "25px" ,height:"100vh"}} 
    >
      <h2
        style={{
          color: "white",
          fontSize: "clamp(28px, 5vw, 38px)", // ✅ responsive text
          fontWeight: "bolder",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        About Me
      </h2>

      <Row className="align-items-center">

        {/* Image Section */}
        <Col lg={6} md={12} className="text-center mb-4">
          <div className="circle-bg">
            <img
              src="./ananthi27.jpeg"
              alt="profile"
              style={{
                width: "130%",
                maxWidth: "350px",
                height: "auto",
                position:"relative",
                left:"100px",
                top:"20px",
              }}
              className="img-fluid"
            />
          </div>
        </Col>

        {/* Text Section */}
        <Col lg={6} md={12}>
          <p
            style={{
              fontSize: "clamp(16px, 2.5vw, 20px)", // ✅ responsive text
              textAlign: "justify",
              lineHeight: "1.8",
              padding: "0 10px"
            }}
          >
            I'm a motivated and passionate fresher frontend developer, skilled
            in React, HTML, CSS, Bootstrap, React-Bootstrap and JavaScript. As
            a fresher, I'm eager to learn and build modern, responsive, and
            interactive web applications, while contributing to real-world
            projects and continuously improving my frontend skills.
          </p>
        </Col>

      </Row>
    </Container>
  );
}