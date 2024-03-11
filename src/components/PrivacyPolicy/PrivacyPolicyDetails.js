import React from "react";
// import ContactForm from "../Contact/ContactForm";
// import Link from "../Reuseable/Link";
// import TextSplit from "../Reuseable/TextSplit";
// import CommentOne from "./CommentOne";

const NewsDetailsLeft = ({ news = {} }) => {
  return (
    <div className="news-details__left">
      <div className="news-details__content">
        <h1 className="news-details__title">Our services </h1>
        <p className="news-details__sub-title">
          our processes work for you in order to save your time, resources and
          keep you comply with regulatory requirements. We are able to reduce
          your regulatory burden and make sure you are safe in matters relating
          to regulations and legislation. We aim to keep a positive compliance
          environment across your organization. There are services we expertise
          and are able to provide you with the highest of quality:
        </p>
        <h2 className="news-details__title">
          a. Authorizations and applications{" "}
        </h2>
        <p className="news-details__text-1">
          How we can help you to achieve authorisation or registration?{" "}
        </p>
        <h3 className="news-details__title">
          (i) Step 1 – Gathering information{" "}
        </h3>
        <p className="news-details__text-2">
          Our team will need to understand your business activities and
          determine whether you need to get authorisation or permission from
          state authority. We will arrange a meeting with you in order to
          discuss your business model, internal controls around governance,
          risk, and compliance, as well as the key individuals at your firm.
          After our meeting, we will be able to determine what permissions you
          are required to have in accordance with law. Finally, we move our
          process of compiling all the information required in order to build
          your information pack. We will guide you through what we need to know
          and ensure we have got everything your regulator requires.
        </p>
        <h3 className="news-details__title">
          (ii) Step 2 – Application creation
        </h3>
        <p className="news-details__text-2">
          We start to work on application pack. The contents of the application
          pack will depend on business lines and applicable regulatory
          requirements as well the scale and complexity of your business model.
          We will create policies and procedures which are required by
          regulations to conduct business activities. These policies and
          procedures might include some of the following: regulatory business
          plan, compliance monitoring programme and other documents in
          compliance with regulatory requirements and best practices. We will
          work with you to ensure we anticipate any concerns you or state
          authority may have, helping to avoid delays further in the process.
          Once we complete the application pack, we will send it to you for a
          final review.
        </p>
        <h3 className="news-details__title">
          (iii) Step 3 – Application management
        </h3>
        <p className="news-details__text-2">
          We will submit your applications and negotiate certain questions and
          concerns from state authority. We will ensure all responses are
          professionally worded and provide the appropriate information and
          evidence requested. At this point you will just need to pay your
          application fees.
        </p>
        <h3 className="news-details__title">(iv) Authorisation / permission</h3>
        <p className="news-details__text-2">
          Once you are authorized, we will arrange the meeting with you in order
          to provide you guidance on what you will need to do in order to comply
          with the regulatory requirements. If you feel you might need ongoing
          support, we can do it for you. Speak to one of our team member for
          more information.
        </p>
      </div>
      {/* <div className="news-details__bottom">
        <p className="news-details__tags">
          <span>Tags</span>
          {tags.map((tag, i) => (
            <a href="#" key={i}>
              {tag}
            </a>
          ))}
        </p>
        <div className="news-details__social-list">
          {socials.map(({ id, href, icon }) => (
            <a key={id} href={href}>
              <i className={icon}></i>
            </a>
          ))}
        </div>
      </div>
      <div className="news-details__pagenation-box">
        <ul className="list-unstyled news-details__pagenation">
          {pagination.map((text, i) => (
            <li key={i}>
              <TextSplit text={text} />
            </li>
          ))}
        </ul>
      </div>
      <CommentOne comments={comments} />
      <div className="comment-form">
        <h3 className="comment-form__title">Leave a Comment</h3>
        <ContactForm inputs={inputs} btnText="Submit comment" />
      </div> */}
    </div>
  );
};

export default NewsDetailsLeft;
