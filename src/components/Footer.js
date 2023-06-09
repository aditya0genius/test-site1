import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  End,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "#C4AC66", 
                   textAlign: "center", 
                   marginTop: "-100px" }}>
        My Venue: "Your Personal Party Planner"
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="/aim">Aim</FooterLink>
            <FooterLink href="/vision">Vision</FooterLink>
            {/* <FooterLink href="#">Testimonials</FooterLink> */}
            <FooterLink href="/faqs">FAQs</FooterLink>
            
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="/home">Wedding Venues</FooterLink>
            <FooterLink href="/home">Party Venues</FooterLink>
            {/* <FooterLink href="#">Decorators</FooterLink>
            <FooterLink href="#">Blog</FooterLink> */}
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="/reachus">Bhilai-Durg</FooterLink>
            <FooterLink href="/reachus">Raipur</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/myvenueofficial/" target="_blank">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://twitter.com/MyVenue0601?s=20" target="_blank">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.youtube.com/@Myvenue-0106" target="_blank">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
        <Row>
          <FooterLink href="/tncs">
              Terms and Conditions
        </FooterLink>
        <FooterLink href="/cancellation">
            Cancellation & Refund Policy
        </FooterLink>
        <FooterLink href="/privacypolicy">
              Our Privacy Poicy
        </FooterLink>
        <FooterLink href="/contactus">
              Reach Us for other queries
        </FooterLink>
         
          
        </Row>

          <End>
          <div className="end">
            <p>
         My Venue &#169; 2023 All Rights Reserved - Site owned by <a href="https://www.instagram.com/aditya0genius/" target="_blank">Aditya Deshmukh</a></p>
        </div>
          </End>
        
  
        
      </Container>
    </Box>
  );
};
export default Footer;