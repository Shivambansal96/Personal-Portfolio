import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import twitter_clone from "../../Assets/Projects/twitter_clone.png"
import admin_portal from "../../Assets/Projects/admin_portal.png"
import rent_a_property from "../../Assets/Projects/rent_A_property.png"
import resume_builder from "../../Assets/Projects/resumeBuilder.png"
import apple_ui_clone from "../../Assets/Projects/apple_ui_clone.png"
import crypto_currency from "../../Assets/Projects/crypto_currency.png"


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
              imgPath={twitter_clone}
              isBlog={false}
              title="Twitter Clone"
              description="A Twitter clone is a social media platform that mimics the core functionalities of Twitter, allowing users to post short messages (tweets), follow other users, engage through likes and comments."
              ghLink="https://github.com/Shivambansal96/TwitterCloneFrontEnd"
              demoLink="https://twitter-clone-front-end.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={admin_portal}
              isBlog={false}
              title="Admin Portal"
              description="An admin portal is a comprehensive web application designed to manage user details, monitor activity through interactive graphs and tables, and ensure optimal user experience with features like dark mode and responsive design."
              ghLink="https://github.com/Shivambansal96/Geekathon-Module-5-React"
              demoLink="https://geekathon-module-5-react.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto_currency}
              isBlog={false}
              title="Crypto Calculator"
              description="A modern cryptocurrency tracking platform that provides real-time data on various digital currencies, including price charts, market trends, and coin details. The website offers a user-friendly interface for exploring cryptocurrencies, tracking market performance, and accessing up-to-date financial insights."
              ghLink="https://github.com/Shivambansal96/placement_mod"
              demoLink="https://placement-mod-task-1.vercel.app/"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apple_ui_clone}
              isBlog={false}
              title="Apple UI Clone"
              description="An Apple UI clone emulates the distinctive design elements and aesthetics of Apple's user interface, integrating responsive layouts, animated interactions, and stylistic features akin to Apple's products to provide a familiar and visually appealing user experience."
              ghLink="https://github.com/Shivambansal96/TEAM-APPLE-GEEKATHON"
              demoLink="https://shivambansal96.github.io/TEAM-APPLE-GEEKATHON/Homepage_by_Shivam/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resume_builder}
              isBlog={false}
              title="Resume Builder"
              description="A responsive and customizable resume builder that allows users to easily create professional resumes. Built using modern web technologies, this project offers pre-designed templates, live editing, and export to PDF functionality—ideal for job seekers and professionals."
              ghLink="https://github.com/Shivambansal96/Resume_Template"
              demoLink="https://resume-template-weld.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rent_a_property}
              isBlog={false}
              title="Rent A Property"
              description="A comprehensive property rental platform designed to simplify the search for rental homes and apartments. Users can browse property listings, view detailed descriptions, images, and filter options based on location, price, and amenities. Ideal for landlords and tenants looking for a seamless rental experience."
              ghLink="https://github.com/Shivambansal96/placement_mod"
              demoLink="https://placement-mod-task-2.vercel.app/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
