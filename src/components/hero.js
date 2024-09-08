import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../components/hero.css";

const HeroSection = () => {
  return (
    <div className="hero-section container-fluid">
      <Container fluid className="text-center">
        <Row className="justify-content-center">
          {/* Column 1 */}
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="hero-column position-relative"
          >
            <Container className="hero-container">
              {/* Image */}
              <img
                src="/assets/projects.jpg"
                alt="Section 1"
                className="hero-icon w-100"
              />

              {/* Overlay Text */}
              <div className="overlay-text position-absolute bottom-0 start-0 text-start text-white p-3">
                <h4 className="overlay-title  mx-2">EXPERIENCE</h4>
                <p className="overlay-description  mx-2">
                  Here you can find out more about in field expirience and self
                  initiated proejcts
                </p>
              </div>
            </Container>
          </Col>

          {/* Column 2 */}
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="hero-column position-relative"
          >
            <Container className="hero-container">
              <img
                src="/assets/about.jpg"
                alt="Section 3"
                className="hero-icon w-100"
              />
              {/* Overlay Text */}
              <div className="overlay-text position-absolute bottom-0 start-0 text-start text-white p-3">
                <h4 className="overlay-title  mx-2">ABOUT ME</h4>
                <p className="overlay-description  mx-2">
                  {" "}
                  Get to know me, here I tell a little bit about me and what I
                  have been up to recently in rather interactive form
                </p>
              </div>
            </Container>
          </Col>

          {/* Column 3 */}
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="hero-column position-relative"
          >
            <Container className="hero-container">
              <img
                src="/assets/education .jpg"
                alt="Section 2"
                className="hero-icon w-100"
              />
              {/* Overlay Text */}
              <div className="overlay-text position-absolute bottom-0 start-0 text-start text-white p-3">
                <h4 className="overlay-title mx-2">KNOWLEDGE</h4>
                <p className="overlay-descripton mx-2">
                  Section dedicated for showcasing my education and technology
                  skills, everything is 100% authentic - I am software engineer.
                </p>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
