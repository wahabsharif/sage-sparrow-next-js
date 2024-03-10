import { oueServicesData } from "@/data/home/ourServicesData";
import useActive from "@/hooks/useActive";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";
import SingleOurServices from "./SingleOurServices";

const { title, services } = oueServicesData;

const OurServices = ({ id = "", hideTitle = false, serviceCount }) => {
  const ref = useActive(id);

  return (
    <section ref={ref} className="services-one" id={id}>
      <Container>
        {!hideTitle && <Title title={title} className="text-left" />}
        <p>
          Sage Sparrow stands as a prominent compliance consultancy in the UK,
          offering comprehensive support in various areas. Our services include
          aiding clients with FCA authorization, continuous compliance
          consulting, prudential services, conducting compliance health checks,
          and managing regulatory projects. Additionally, we provide online
          training and offer compliance software through our proprietary
          platform, PortAll.
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
              <SingleOurServices service={service} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default OurServices;
