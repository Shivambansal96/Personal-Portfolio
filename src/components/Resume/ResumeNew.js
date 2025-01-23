// import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import FE_pdf from "../../Assets/CVs/Shivam_Resume_FE(Latest).pdf";
// import TT_pdf from "../../Assets/CVs/Teaching Resume(24 Nov).pdf";
import TT_pdf from "../../Assets/CVs/Teaching Resume(jpg).jpg";
// import resume_pic from "../../Assets/CVs/Shivam_Resume_FE.jpg";
import FE_resume_pic from "../../Assets/CVs/Shivam_Resume_FE(Latest).jpg";
// import TT_resume_pic from "../../Assets/CVs/Teaching Resume (Nov 24).jpg";
import TT_resume_pic from "../../Assets/CVs/Teaching Resume(jpg).jpg";
import { AiOutlineDownload } from "react-icons/ai";
// import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  // const [width, setWidth] = useState(1200);

  // useEffect(() => {
  //   setWidth(window.innerWidth);

  // }, []);

  return (
    
    <div>

      <Container fluid className="resume-section">
        <Particle />
        {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row> */}

        <Row className="resume">
          <h2>Front End Developer Resume</h2>
            <Container>
              <img style={{height: '100%', width: '40%'}} src={FE_resume_pic} alt="Image_of_Resume" />
            </Container>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={FE_pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>


      <Container fluid className="resume-section">
        <Particle />
        {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row> */}

        <Row className="resume">
          <h2>Technical Trainer Resume</h2>
            <Container>
              <img style={{height: '100%', width: '40%'}} src={TT_resume_pic} alt="Image_of_Resume" />
            </Container>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={TT_pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>

    
  );
}

export default ResumeNew;
