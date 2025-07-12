import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">SANJAI SABARI </span>
            from <span className="purple"> Tamil Nadu, India.</span>
            <br />
            I am currently in my UG(CSE).
            <br />
            I have completed HSSC in GHSS Perumanallur Tiruppur, India.
            
            <br />
            <br />
            Apart from coding,
          </p>
          <ul>
           
            <li className="about-activity">
              <ImPointRight /> Design and simulate IoT Platforms
            </li>
            <li className="about-activity">
              <ImPointRight /> Desinging Photo Frames
            </li>
             <li className="about-activity">
              <ImPointRight /> Ncc Army
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          
          <footer className="blockquote-footer">Sanjai</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
