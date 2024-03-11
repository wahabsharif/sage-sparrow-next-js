import { newsDetails } from "@/data/newsSection";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PrivacyPolicyDetails from "./PrivacyPolicyDetails";

const PrivacyPolicyPage = () => {
  return (
    <section className="news-details">
      <Container>
        <Row>
          <Col xl={12} lg={12}>
            <PrivacyPolicyDetails news={newsDetails} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PrivacyPolicyPage;
