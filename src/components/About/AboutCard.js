import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shivam Bansal </span>
            from <span className="purple"> Siliguri, West Bengal, India.</span>
            <br />
            I am currently an Apprentice at Geekster.
            <br />
            I have completed B.com(Hons) from School of Open Learning (DU).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listen to music!
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
            <br />
          <p style={{ color: "rgb(155 126 172)" }}>
            "Never listen to those who say: You can't do it!"{" "}
          </p>
          
          <footer className="blockquote-footer"> Shivam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
