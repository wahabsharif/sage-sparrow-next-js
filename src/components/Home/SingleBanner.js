import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "../Reuseable/Link";
import TextSplit from "../Reuseable/TextSplit";

const SingleSlideOne = ({ slider = {}, showShape = false }) => {
  const { bg, title, href } = slider;

  return (
    <>
      <div
        className="image-layer"
        style={{
          backgroundImage: `url(${
            require(`@/images/backgrounds/${bg}`).default.src
          })`,
        }}
      ></div>
      <Container>
        <Row>
          <Col xl={showShape ? 7 : 12}>
            <div className="main-slider__content">
              <h2>
                <TextSplit text={title} />
              </h2>
              <p className="text-white">
                Established in 2003, Sage Sparrow is a prominent compliance
                consultancy in the UK, offering support for FCA authorization,
                SEC registration, continuous consulting, prudential services,
                online training, and compliance software.
              </p>
              <Link href={href} className="thm-btn">
                Discover More
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SingleSlideOne;
