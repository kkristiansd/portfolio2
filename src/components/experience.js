import React from "react";
import { Carousel } from "react-bootstrap";
import "./experience.css";

const ExperienceCarousel = () => {
  return (
    <div className="experience-carousel-container">
      <Carousel indicators={true} controls={true} interval={3000} pause="hover">
        {/* Slide 1 */}
        <Carousel.Item>
          <img
            className="d-block svg-custom-width"
            src="/assets/tcelectronic.svg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third Experience</h3>
            <p>Details about the third experience</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/pet.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second Experience</h3>
            <p>Details about the second experience</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/pnta (5).png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First Experience</h3>
            <p>Details about the first experience</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ExperienceCarousel;
