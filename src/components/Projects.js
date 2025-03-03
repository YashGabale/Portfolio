import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <br></br>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Master's Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Bacholer's Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Publications and Research Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <Row>                       
                        <ul>
                          <li><p><h4>1. Heal (Aug 2024 - Dec 2024)</h4></p>
                            <p> Developed HEAL, a web-based platform promoting healthy living using the MEAN stack. Enabled users to purchase nutritious food from various merchants, enhancing accessibility and user experience through innovative features.</p>
                          </li>
                        </ul>
                        <ul>
                          <li><p><h4>2. Online Shopper Purchasing Intention Dataset Analysis (May 2024 - July 2024)</h4></p>
                            <p> There were 12,330 synthetic samples in the dataset utilized in this study, and each sample has 18 unique features. The models that are being examined include SVM, XG Boost, Rain Forest, Logistic Regression, LightGBM, KNN and decision tree. With an accuracy of 90.90%, XGboost showed the best level of performance.</p>
                          </li>
                        </ul>
                        <ul>
                          <li><p><h4>3. CARIT - Center for Applied Research in Information Technology (Jan 2024 - April 2024)</h4></p>
                            <p>Developed a website that can expedite the department's hiring process and ease the eligibility verification process for graduate and undergraduate students. Web development technologies, HTML,CSS, PHP and JavaScript were used while developing the website. If used this project can reduce hiring decision time by 30%.</p>
                          </li>
                        </ul>                       
                    </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>                       
                        <ul>
                          <li><p><h4>1. Structural Health Monitoring System for Bridges (June 2022 - May 2023)</h4></p>
                          <p>Created structural health monitoring system for bridges to detect vibration on bridges in real time for non-destructive auditing by the civil engineers in charge of bridge maintenance. Used to view data from sensors attached to bridges from anywhere using a laptop, mobile device, or tablet. This device was built using Raspberry Pi, ADXL 345 accelerometer & SW420 vibration sensor.
                          </p>
                          </li>
                        </ul>
                        <ul>
                          <li><p><h4>2. Heart Rate Monitoring System (Dec 2021 - May 2022)</h4></p>
                            <p> Designed heart rate monitoring device using a PCB (Printed Circuit Board) with an 8051 microprocessor, heart rate monitoring sensor, and 16*2 LCD display. Programmed the processor using Assembly Language to interface with the heart rate sensor. The system measured pulse through the finger placed on the sensor and displayed it on LCD.</p>
                          </li>
                        </ul>
                        <ul>
                          <li><p><h4>3. Pharmacy inventory management using DBMS (Feb 2022 - Mar 2022)</h4></p>
                            <p>Developed pharmacy inventory management system to maintain track of stock, medicine prices, and a customer's remaining funds from prior purchases, among other things using Java to create a graphical UI and SQL Database and SQL queries to store and retrieve data from the database.</p>
                          </li>
                        </ul>
                        <ul>
                          <li><p><h4>4. Social Distancing Alarm Cap (Dec 2020 - May 2021)</h4></p>
                            <p>Built a social distancing alarm cap that alerts the user whenever another person gets within 50 cm of the user to help keep a safe distance during the COVID-19 pandemic.</p>
                          </li>
                        </ul>                          
                    </Row>
                    </Tab.Pane>
                    
                    <Tab.Pane eventKey="third">
                      <Row>
                      <ul>
                          <li><p><h4>1. Maritime Cybersecurity Vulnerabilities and Mitigation Strategies (May 2024 - July 2024)</h4></p>
                          <p>The research points to vulnerabilities in maritime operations and evaluates several cybersecurity strategies.

                          </p>
                          </li>
                      </ul>
                      <ul>
                          <li><p><h4>2. IOT Security Risks and Solutions (Jan 2024 - May 2024)</h4></p>
                          <p>The paper discussed various challenges related to privacy and security issues in IoT environments.
                          </p>
                          </li>
                      </ul>
                        <center><h2>Publications</h2></center>
                        <ul>
                          <li><p><h4>Yash Gabale, ‘Structural Health Monitoring of Bridges’</h4></p>
                          <p>published in International Journal of Progressive Research in Engineering Management and Science, May’23, Volume 03, Issue 05
                          </p>
                          </li>
                      </ul>
                      </Row>
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
