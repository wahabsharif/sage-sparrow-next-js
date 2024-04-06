import { oueSectorsData } from "@/data/home/ourSectorsData";
import useActive from "@/hooks/useActive";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";
import SingleOurSectors from "./SingleOurSectors";

const { title, services } = oueSectorsData;

const OurSectors = ({ id = "", hideTitle = false, serviceCount }) => {
  const ref = useActive(id);

  return (
    <section ref={ref} className="services-one" id={id}>
      <Container>
        {!hideTitle && <Title title={title} className="text-left" />}
        <p>
          Our team, which include greater than 60 professionals, collaborates
          inside specialised enterprise groups to serve a various consumer base
          exceeding 800 entities. Our customers spans diverse sectors,
          encompassing wholesale funding firms (inclusive of hedge funds,
          private marketplace firms, company finance, and brokers), capital
          markets (along with asset managers and broker/dealers), wealth
          management, fee offerings and cryptoassets, customer credit, and
          coverage and lending.
        </p>
        <Row>
          {services.slice(0, serviceCount).map((service) => (
            <Col
              xl={4}
              lg={4}
              md={hideTitle ? 6 : undefined}
              key={service.id}
              className="animated fadeInUp"
            >
              <SingleOurSectors service={service} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default OurSectors;
