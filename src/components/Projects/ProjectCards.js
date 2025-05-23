import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <a href={props.demoLink} target="_blank" rel="noopener noreferrer">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      </a>
      <Card.Body>
        <Card.Title style={{ color: "#A259FF", fontStyle: "italic", fontWeight: "bold" }}>{props.title}</Card.Title>
        <br/>
        {"\n"}
        <Card.Text style={{ textAlign: "justify", fontStyle: "italic", }}>
          {props.description}
        </Card.Text>
        <br />
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>

        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
