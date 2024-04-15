import { freeConsultation } from "@/data/freeConsultation";
import React from "react";
import { Container } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const { title, titleHighlight, emailUk, emailAe } = freeConsultation;

const FreeConsultation = () => {
  return (
    <section className="free-consultation">
      <Container>
        <div className="free-consultation__inner animated fadeInUp">
          <div className="free-consultation__left">
            <h3 className="free-consultation__content">
              <TextSplit text={title} highlight={titleHighlight} />
            </h3>
            <div className="free-consultation__icon">
              <span className="fas fa-mail-bulk"></span>
            </div>
          </div>
          <div className="free-consultation__right">
            <h4 className="free-consultation__contact-info">
              <a
                href={`mailto:${emailUk}`}
                className="free-consultation__contact-number"
              >
                {emailUk}
              </a>
              <a
                href={`mailto:${emailAe}`}
                className="free-consultation__contact-number"
              >
                {emailAe}
              </a>
            </h4>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FreeConsultation;
