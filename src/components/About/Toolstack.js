import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiNetlify,
  SiRender,
  
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="VS Code"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman title="Postman"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack title="Slack"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify title="Netlify"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRender title="Render"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel title="Vercel"/>
      </Col>
    </Row>
  );
}

export default Toolstack;
