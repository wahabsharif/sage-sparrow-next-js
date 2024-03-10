import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Link from "../Reuseable/Link";
import Title from "../Reuseable/Title";

const Intro = () => {
  return (
    <section className="work-together-two">
      <Container>
        <Row>
          <Col xl={6} lg={6}>
            <div className="work-together-tow__right">
              <Title
                title="Achieve FCA authorisation with Sage Sparrow"
                className="text-left"
              />
              <p className="work-together-tow__text-2">
                With over 80 years of collective ex-regulator expertise
                in-house, Sage Sparrow possesses a deep understanding of the
                FCA&apos;s priorities in authorization applications. This
                expertise enables us to assist our clients in submitting
                comprehensive and precise applications to the Regulator,
                ensuring success regardless of their firm&apos;s size or sector,
                on the first attempt. Crafting exemplary FCA applications is a
                source of pride and a core service offering for Sage Sparrow.
              </p>
              <Link href="/about" className="thm-btn work-together-tow__btn">
                Learn More
              </Link>
            </div>
          </Col>
          <Col xl={6} lg={6}>
            <div className="work-together-tow__right">
              <Title
                title="Come and say hello, we've met before..."
                className="text-left"
              />
              <p className="work-together-tow__text-2">
                Following our merger in 2022, Compliancy Services and Portman
                Compliance prioritized adopting a new name as one of their
                initial business objectives. The decision to unite under a fresh
                identity aimed to encompass the strengths of both firms and
                signal the collaborative direction and enhanced resources
                resulting from the partnership. For further insights into our
                new name and our shared values, kindly click on the link below.
              </p>
              <Link href="/about" className="thm-btn work-together-tow__btn">
                Discover More
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Intro;
