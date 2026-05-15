import { Col, Container, Row } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I am
                <strong className="main-name"> Shivam Bansal</strong>
              </h1>

              <h1
                aria-hidden="false"
                style={{
                  position: "absolute",
                  left: "-10000px",
                  top: "auto",
                  width: "1px",
                  height: "1px",
                  overflow: "hidden"
                }}
              >
                Shivam Bansal - Freelance Web Developer & Technical Trainer
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Tilt>
                {/* <img
                  // src={homeLogo_2}
                  src="/images/shivam_bansal.png"
                  alt="Shivam Bansal - Freelance Web Developer and Technical Trainer"
                  className="img-fluid"
                  style={{ maxHeight: "450px", borderRadius: '50px' }}
                /> */}

                <img
                  src="/images/shivam_bansal.png"
                  alt="Shivam Bansal - Freelance Web Developer and Technical Trainer"
                  className="img-fluid"
                  loading="eager"
                  fetchpriority="high"
                  width="450"
                  height="450"
                  style={{ maxHeight: "450px", borderRadius: "50px" }}
                />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
