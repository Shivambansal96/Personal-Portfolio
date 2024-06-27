import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import twitter_clone from "../../Assets/Projects/twitter_clone.png"
import admin_portal from "../../Assets/Projects/admin_portal.png"
import GeekFoods from "../../Assets/Projects/GeekFoods.png"
import random_pass from "../../Assets/Projects/random_pass.png"
import apple_ui_clone from "../../Assets/Projects/apple_ui_clone.png"
import chrome_extension from "../../Assets/Projects/chrome_extension.png"


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
              imgPath={GeekFoods}
              isBlog={false}
              title="Geek Foods"
              description="GeekFoods is a web platform designed to showcase various restaurants, featuring a homepage, a quote section for customer reviews, and a dedicated restaurant page for exploring different dining options."
              ghLink="https://github.com/Shivambansal96/GeekFoods-Foods"
              demoLink="https://geek-foods-foods.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={random_pass}
              isBlog={false}
              title="Random Password Generator"
              description="A random password generator is a tool that creates strong, unpredictable passwords by combining various characters, including letters, numbers, and symbols, to enhance security and protect against unauthorized access."
              ghLink="https://github.com/Shivambansal96/Random-Password-Generator"
              demoLink="https://random-password-generator-eight-sooty.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chrome_extension}
              isBlog={false}
              title="Youtube TimeStamp bookmark - Chrome Extension"
              description="A Chrome extension for YouTube timestamp bookmarking allows users to save and organize specific moments in YouTube videos by creating bookmarks with timestamps, making it easy to revisit and manage important video segments."
              ghLink="https://github.com/Shivambansal96/Team_1_Geekathon"
              demoLink="https://shivambansal96.github.io/Team_1_Geekathon/Homepage_By_Shivam/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
