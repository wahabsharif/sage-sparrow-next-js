import { oueSectorsData } from "@/data/home/ourSectorsData";
import useActive from "@/hooks/useActive";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleOurSectors from "./SingleOurSectors";

const { title, services } = oueSectorsData;

const OurSectors = ({ id = "", hideTitle = false, serviceCount }) => {
  const ref = useActive(id);

  return (
    <section ref={ref} className="services-one" id={id}>
      <Container>
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
