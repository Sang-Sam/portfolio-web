import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/CC_AIML.png";
import projImg2 from "../assets/img/cpp.png";
import projImg3 from "../assets/img/Game.png";
import projImg4 from "../assets/img/airline.png";
import projImg5 from "../assets/img/VR.png";
import projImg6 from "../assets/img/SQL_attack.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
      {
          title: "AI/ML-Based Fraud Detection System",
          description: "Developed a system to detect financial fraud using ML algorithms, featuring anomaly detection and an alert notification mechanism.",
          imgUrl: projImg1,
      },
      {
        title: "Shopping Management System",
        description: "Streamlined e-commerce project using C++ for automated billing, stock updates, and vendor-customer interfaces.",
        imgUrl: projImg2,
      },
      {
          title: "Game Website",
          description: "An interactive website featuring multiple web-based games built using JavaScript and responsive design principles.",
          imgUrl: projImg3,
      },
      {
          title: "Airline Reservation System",
          description: "A comprehensive application for booking and managing airline tickets, implemented with HTML and PHP.",
          imgUrl: projImg4,
      },
      
      {
          title: "Gallery Gaze",
          description: "A Unity-based project where users can view famous monuments and paintings from around the world in one place, offering an interactive experience.",
          imgUrl: projImg5,
      },
      {
          title: "SQL Injection Detection System",
          description: "Flow-based analysis and machine learning model to detect and prevent SQL injection attacks.",
          imgUrl: projImg6,
      },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
