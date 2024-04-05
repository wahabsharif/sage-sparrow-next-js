import React from "react";
import Link from "../Reuseable/Link";
import TextSplit from "../Reuseable/TextSplit";

const SingleOurSectors = ({ service = {} }) => {
  const { title, icon, href, text } = service;

  return (
    <div className="services-one__single">
      <div className="services-one__content">
        <div className="services-one__title-box">
          <div className="services-one__title-icon">
            <span className={icon}></span>
          </div>
          <h3 className="services-one__title">
            <Link href={href}>
              <TextSplit text={title} />
            </Link>
          </h3>
        </div>
        <p className="services-one__text">{text}</p>
        <div className="services-one__bottom">
          <Link href={href} className="services-one__read-more">
            Read More
          </Link>
          <Link href={href} className="services-one__arrow">
            <span className="icon-right-arrow"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleOurSectors;
