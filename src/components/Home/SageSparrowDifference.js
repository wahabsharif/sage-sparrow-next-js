import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";

const SageSparrowDifference = () => {
  return (
    <section className="work-together-two">
      <Container>
        <Title
          title="What is the Sage Sparrow difference?"
          className="text-left"
        />
        <Row>
          <Col xl={6} lg={6}>
            <div className="work-together-two__left animated slideInLeft">
              <div className="work-together-two__img">
                <Image
                  src="/imgs/sage-sparrow-difference/img-1.jpg"
                  alt="Image"
                />
              </div>
            </div>
          </Col>
          <Col xl={6} lg={6}>
            <div className="work-together-tow__right">
              <Title
                title="Our understanding of the regulatory landscape"
                className="text-left"
              />
              <p className="work-together-tow__text-2">
                Since 2003, Sage Sparrow has navigated evolving compliance
                landscapes. With senior management taking on more responsibility
                and a focus on consumer needs, we integrate compliance
                seamlessly into financial processes. Our crafted services
                facilitate regulatory adherence, minimizing disruptions to daily
                business operations.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={6} lg={6}>
            <div className="work-together-tow__right">
              <Title
                title="Our unique perspective of the regulator"
                className="text-left"
              />
              <p className="work-together-tow__text-2">
                In the face of escalating regulatory complexity, businesses now
                more than ever seek multi-sector specialists to navigate their
                compliance journey comprehensively. Our diverse team of
                financial sector experts regularly collaborates, sharing
                insights on FCA interactions and regulatory trends. This ensures
                we provide clients with tailored solutions informed by a deep
                understanding of the FCA, setting us apart from competitors.
              </p>
            </div>
          </Col>
          <Col xl={6} lg={6}>
            <div className="work-together-two__left animated slideInLeft">
              <div className="work-together-two__img">
                <Image
                  src="/imgs/sage-sparrow-difference/img-2.jpg"
                  alt="Image"
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={6} lg={6}>
            <div className="work-together-two__left animated slideInLeft">
              <div className="work-together-two__img">
                <Image
                  src="/imgs/sage-sparrow-difference/img-3.webp"
                  alt="Image"
                />
              </div>
            </div>
          </Col>
          <Col xl={6} lg={6}>
            <div className="work-together-tow__right">
              <Title
                title="Our investment in our employees"
                className="text-left"
              />
              <p className="work-together-tow__text-2">
                Our foremost commitment is investing in our employees, the
                driving force behind the distinctive Sage Sparrow experience.
                With a diverse, inclusive, and familial team, we prioritize
                trust, mutual support, open communication, and a culture devoid
                of egos, politics, or silo thinking. Creating a respectful
                environment fosters the best in each individual, naturally
                translating into exceptional service for our clients.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={6} lg={6}>
            <div className="work-together-tow__right">
              <Title
                title="Inspiring compliance confidence"
                className="text-left"
              />
              <p className="work-together-tow__text-2">
                Drawing from our extensive experience, we adeptly harmonize
                firms&apos; business objectives with compliance needs. Tailoring
                our services, we empower clients to navigate regulations,
                preserving their vision and objectives with confidence.
              </p>
            </div>
          </Col>
          <Col xl={6} lg={6}>
            <div className="work-together-two__left animated slideInLeft">
              <div className="work-together-two__img">
                <Image
                  src="/imgs/sage-sparrow-difference/img-4.webp"
                  alt="Image"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SageSparrowDifference;
