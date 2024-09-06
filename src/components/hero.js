import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../components/hero.css"; // Import custom CSS

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-section">
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
            <img src="/assets/red.jpg" alt="Section 1" className="hero-icon" />
          </Col>

          {/* Column 2 */}
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="hero-column position-relative"
          >
            <img
              src="/assets/green.jpg"
              alt="Section 2"
              className="hero-icon"
            />
          </Col>

          {/* Column 3 */}
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="hero-column position-relative"
          >
            <img
              src="/assets/white.jpg"
              alt="Section 3"
              className="hero-icon"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
