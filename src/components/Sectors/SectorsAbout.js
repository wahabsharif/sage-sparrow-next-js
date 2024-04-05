import { newsDetails } from "@/data/newsSection";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectorsAboutDetails from "./SectorsAboutDetails";

const SectorsAbout = () => {
  return (
    <section className="news-details">
      <Container>
        <Row>
          <Col xl={12} lg={12}>
            <SectorsAboutDetails news={newsDetails} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SectorsAbout;
