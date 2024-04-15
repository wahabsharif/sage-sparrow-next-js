import { contactDetails } from "@/data/contact";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import GoogleMap from "../GoogleMap/GoogleMap";

const {
  phone,
  phoneHref,
  emailUk,
  emailAe,
  title,
  text,
  addressUk,
  addressAe,
  contactIcon,
} = contactDetails;

const ContactDetails = () => {
  return (
    <section className="contact-details">
      <Container>
        <Row>
          <div className="contact-details__title-box">
            <h4 className="contact-details__title">{title}</h4>
          </div>
        </Row>
        <Row>
          <Col xl={12}>
            <div className="contact-details__inner">
              <GoogleMap
                containerClassName="contact-details__map-box"
                mapClassName="contact-details__map"
                mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.235242187767!2d-0.09124422472476837!3d51.52724500925518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d64c8d91b11%3A0x8fd10f948b8c6ef5!2s128%20City%20Rd%2C%20London%20EC1V%202NX%2C%20UK!5e0!3m2!1sen!2s!4v1713171195227!5m2!1sen!2s"
              />
              <div className="contact-details__content">
                <p className="contact-details__address">{addressUk}</p>
                <div className="contact-details__contact-info">
                  <h4 className="contact-details__contact-number-email">
                    {/* <a
                      href={`tel:${phoneHref}`}
                      className="contact-details__contact-number"
                    >
                      {phone}
                    </a> */}
                    <a
                      href={`mailto:${emailUk}`}
                      className="contact-details__contact-email"
                    >
                      {emailUk}
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={12}>
            <div className="contact-details__inner">
              <div className="contact-details__content">
                <p className="contact-details__address">{addressAe}</p>
                <div className="contact-details__contact-info">
                  <h4 className="contact-details__contact-number-email">
                    <a
                      href={`mailto:${emailAe}`}
                      className="contact-details__contact-email"
                    >
                      {emailAe}
                    </a>
                  </h4>
                </div>
              </div>
              <GoogleMap
                containerClassName="contact-details__map-box"
                mapClassName="contact-details__map"
                mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.932302885241!2d55.13828817359056!3d25.070283536832882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6cac535b2479%3A0x74954bd6c483ae6f!2s3805%20Cluster%20D%20-%20Jumeirah%20Lake%20Towers%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1713171853811!5m2!1sen!2s"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactDetails;
