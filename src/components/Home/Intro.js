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
                With over eighty years of collective ex-regulator understanding
                in-house, Sage Sparrow possesses a deep information of the FCA`s
                priorities in authorization programs. This understanding allows
                us to help our customers in filing complete and particular
                programs to the Regulator, making sure fulfillment no matter
                their firm&apos;s length or sector, on the primary attempt.
                Crafting exemplary FCA programs is a supply of pleasure and a
                center carrier imparting for Sage Sparrow.
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
                Compliance prioritized adopting a brand new call as certainly
                considered one among their preliminary enterprise objectives.
                The selection to unite beneathneath a fresh identification aimed
                to embody the strengths of each corporations and sign the
                collaborative path and more advantageous resources because of
                the partnership.{""}
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
