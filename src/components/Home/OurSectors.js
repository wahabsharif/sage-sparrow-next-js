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
          Our team, consisting of more than 60 professionals, collaborates
          within specialized industry teams to serve a diverse client base
          exceeding 800 entities. Our clientele spans various sectors,
          encompassing wholesale investment firms (such as hedge funds, private
          market firms, corporate finance, and brokers), capital markets
          (including asset managers and broker/dealers), wealth management,
          payment services and cryptoassets, consumer credit, and insurance and
          lending.
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
