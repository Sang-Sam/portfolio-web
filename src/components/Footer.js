import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.svg';
import navIcon3 from '../assets/img/leetcode.svg';
import { Newsletter } from "./Newsletter";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Newsletter/>
          <Col size={12} sm={6} >
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/samartha-r-sanglikar-79b689256/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/Sang-Sam"><img src={navIcon2} alt="" /></a>
                <a href="https://leetcode.com/u/Sam_XXI/"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright . All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
