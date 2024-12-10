import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
  DiGithub,
  DiNpm,
  DiPython,
  DiBootstrap,
  DiSass,
} from "react-icons/di";
import {
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiFigma,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiEslint,
  SiCanva,

} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava title="Java"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma title="Figma" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva title="Canva" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithub title="GitHub" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 title="HTML"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 title="CSS"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSass title="Sass"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss title="TailwindCSS"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap title="BootStrap"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux title="Redux"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase title="Firebase"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEslint title="Eslint"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNpm title="npm"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs title="Node.js"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress title="Express.js"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb title="MongoDB"/>
      </Col>
    </Row>
  );
}

export default Techstack;
