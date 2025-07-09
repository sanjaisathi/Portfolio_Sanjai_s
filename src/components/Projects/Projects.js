import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import smp from "../../Assets/Projects/smartParking.png";
import editor from "../../Assets/Projects/codeEditor.png";
import NEWS from "../../Assets/NEWS.png";
import todo from "../../Assets/Projects/TODO.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NEWS}
              isBlog={false}
              title="News Aggrecator"
              description="The News Aggregator App is a full-stack web application that curates and displays real-time news content by leveraging the Pegion API for news sourcing and the Gemini API for generating summaries or enhancing article readability using generative AI."
              ghLink="https://github.com/sanjaisathi/News"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="PRS_FABRICS_WEB"
              description="A specialized E-commerce web application designed for selling dresses online. This project simulates a real-world clothing store with features tailored for both customers and admin, providing a seamless shopping and product management experience."
              ghLink="https://github.com/sanjaisathi/PRS_FABRICS"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smp}
              isBlog={false}
              title="SmartPArking_System Map"
              description="The Smart Parking System is a machine learning-based application designed to detect and display real-time parking slot availability using CNN and OpenCV. In the latest iteration, I integrated a simple interactive map interface, enabling users to view parking slot statuses in a spatial context for better usability and navigation."
              ghLink="https://github.com/sanjaisathi/SmartParking_map"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smp}
              isBlog={false}
              title="Simpe SmartParking"
              description="The Smart Parking System is a computer vision-based project that uses Machine Learning (CNN) and OpenCV to automatically detect parking slot availability from live or recorded video feeds. This system is designed to reduce manual monitoring and improve parking efficiency in urban environments."
              ghLink="https://github.com/sanjaisathi/Smat-parking-system"
             
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="TO-DO App"
              description="The Smart Parking System is a computer vision-based project that uses Machine Learning (CNN) and OpenCV to automatically detect parking slot availability from live or recorded video feeds. This system is designed to reduce manual monitoring and improve parking efficiency in urban environments."
              ghLink="https://github.com/sanjaisathi/To_do-app"
             
            />
          </Col>

         

          
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
