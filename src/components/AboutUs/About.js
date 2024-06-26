import { aboutData } from "@/data/about/aboutData";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Link from "../Reuseable/Link";
import Title from "../Reuseable/Title";

const { image, tagline, title, icon, text } = aboutData;

const About = () => {
  return (
    <section className="work-together-two">
      <Container>
        <Row>
          <Col xl={6} lg={6}>
            <div className="work-together-two__left animated slideInLeft">
              <div className="work-together-two__img">
                <Image src={image.src} alt="About Sage Sparrow" />
              </div>
            </div>
          </Col>
          <Col xl={6} lg={6}>
            <div className="work-together-tow__right">
              <Title title={title} tagline={tagline} className="text-left" />
              <div className="work-together-tow__content">
                <div className="work-together-tow__icon">
                  <span className={icon}></span>
                </div>
              </div>
              <p className="work-together-tow__text-2">{text}</p>
              <Link href="#" className="thm-btn work-together-tow__btn">
                Discover More
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
