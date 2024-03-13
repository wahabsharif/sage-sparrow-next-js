import { newsDetails } from "@/data/newsSection";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServicesDetails from "./ServicesDetails";

const ServicesPage = () => {
  return (
    <section className="news-details">
      <Container>
        <Row>
          <Col xl={12} lg={12}>
            <ServicesDetails news={newsDetails} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesPage;
