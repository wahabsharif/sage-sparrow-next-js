import React from "react";
// import ContactForm from "../Contact/ContactForm";
// import Link from "../Reuseable/Link";
// import TextSplit from "../Reuseable/TextSplit";
// import CommentOne from "./CommentOne";

const SectorsAboutDetails = ({ news = {} }) => {
  return (
    <div className="news-details__left">
      <div className="news-details__content">
        <h1 className="news-details__title">Our Sectors </h1>
        <p className="news-details__sub-title">
          Sage Sparrow oversees a workforce of over 60 professionals
          collaborating within industry-specific teams. These teams cater to
          more than 800 clients spanning various sectors, such as wholesale
          investment firms (encompassing hedge funds, private market firms,
          corporate finance, and brokers), capital markets (including asset
          managers and broker/dealers), wealth management, payment services,
          cryptoassets, consumer credit, insurance, and lending.
        </p>
        {/* <h2 className="news-details__title">
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
        </p> */}
      </div>
      {/* <div className="news-details__content">
        <h2 className="news-details__title">b. Compliance advisory</h2>
        <h3 className="news-details__title">(i) Financial crime prevention</h3>
        <p className="news-details__text-2">
          Our team will develop for you all required financial crime prevention
          policies and procedures that will ensure your firm adequately mitigate
          risks associated with financial crime. Our pack might include the
          following documents: AML/CTF and Sanctions policies and procedures;
          fraud prevention policies and procedures; anti-bribery and corruption
          policy and procedures and others.
        </p>
        <h3 className="news-details__title">(ii) Consumer duty</h3>
        <p className="news-details__text-2">
          Our team is able to develop for you all key policies and procedures in
          order to comply with consumer duty principle and fair treatment of
          vulnerable customers principle. Our pack includes the documents, but
          not limited to the following: Product Governance Policy, Conflicts of
          Interest Policy, Consumer Duty and Treating Customers Fairly Policy
          and others.
        </p>
        <h3 className="news-details__title">
          (iii) Compliance healthcheck and compliance audit
        </h3>
        <p className="news-details__text-2">
          You should regularly review your manual(s), policies, procedures, and
          documentation, as well as assessing whether your policies, procedures
          comply with applicable regulatory requirements and assess whether they
          are efficient enough to keep your business safe and efficient. The
          objective is to provide a reasonable assurance that you have
          sufficiently robust compliance controls in place to mitigate the risk
          of non-compliance with the rules and regulations. Controls can include
          documents such as policies and procedures, training, organisation
          structure, management information, independent checks, verifications
          or approvals.
        </p>
        <h3 className="news-details__title">
          (iv) Ongoing compliance support{" "}
        </h3>
        <p className="news-details__text-2">
          Our team is able to support you on ongoing basis making sure you
          comply with regulatory requirements and meet the best practices in
          industry. We can support your compliance through regular compliance
          monitoring, training, compliance assurance reviews and other possible
          ways.
        </p>
        <h3 className="news-details__title">(v) Notifications</h3>
        <p className="news-details__text-2">
          Firms may be required to inform certain state authorities of certain
          events outside their normal reporting schedule such as governance
          arrangements, business models change, regulatory breaches and changes
          in controls and business activities. Our team is able to submit all
          required notification to state authority on your behalf.
        </p>
      </div>
      <div className="news-details__content">
        <h2 className="news-details__title">c. Risk management</h2>
        <p className="news-details__text-1">
          (i) Our team is able to develop your risk management framework for
          you. It includes designing or enhancing your risk management
          methodology for your business line. We can support you in performing
          business wide risk assessments as well as financial crime risk
          assessments.
        </p>
      </div>
      <div className="news-details__content">
        <h2 className="news-details__title">d. KYC managed service </h2>
        <p className="news-details__text-1">
          (i) Our team is able to conduct retrospectively transaction monitoring
          of your customers. We conduct analysis of transactions and able to
          identify all red flags and patterns associated with particular
          customers. It will help you to have a clear understanding of your
          customers’ transactional activities and suspicions which might threat
          to your business as a whole.
        </p>
      </div>
      <div className="news-details__content">
        <h2 className="news-details__title">e. Transaction monitoring </h2>
        <p className="news-details__text-1">
          (i) Our team is able to conduct retrospectively transaction monitoring
          of your customers. We conduct analysis of transactions and able to
          identify all red flags and patterns associated with particular
          customers. It will help you to have a clear understanding of your
          customers’ transactional activities and suspicions which might threat
          to your business as a whole.
        </p>
      </div>
      <div className="news-details__content">
        <h2 className="news-details__title">f. Regulatory reporting</h2>
        <p className="news-details__text-1">
          (i) Our team can provide you advice and support to ensure you meet
          your ongoing commitments as a regulated business. In this context, we
          can help you in reviewing your regulatory filing reports before you
          submit them to state authority; we can prepare your regulatory filing
          reports which you then review and submit to state authority. Where we
          prepare the regulatory filing report, we upload them onto the relevant
          platform once you have approved them.
        </p>
      </div>
      <div className="news-details__content">
        <h2 className="news-details__title">g. Wind down plan </h2>
        <p className="news-details__text-1">
          (i) We can assist you in designing your wind down plan. In this
          context, we provide you a guidance document with a key considerations
          for management, including guidance on the requirements and what
          information should be captured within your plan. We will assist you
          during this process and once complete we review it and provide you
          with recommendations to align your wind-down plan with regulatory
          requirements.
        </p>
        <p className="news-details__text-1">
          (ii) We can assist you in reviewing your wind down plan. In this
          context, we work with management to understand the changes and refresh
          your plan based on those changes. Also, we provide you recommendations
          in respect of enhancing your wind-down plan based on best-practice.
        </p>
      </div>
      <div className="news-details__content">
        <h2 className="news-details__title">h. Trainings </h2>
        <p className="news-details__text-1">
          (i) Our experts are able to provide you and your team members various
          trainings across all sectors to support the understanding of core
          areas of regulation and to help you to meet the training requirements.
        </p>
        <p className="news-details__text-1">
          (ii) Our experts are able to provide you with appropriate compliance
          training. We offer two options: online trainings and classroom
          trainings.
        </p>
        <p className="news-details__text-1">
          (iii) Our experts specialise in different fields and are able to
          provide you the trainings on consumer duty, financial crime
          prevention, culture and ethics, code of conduct, risk management and
          other matters associated with compliance and your business activities.
        </p>
      </div> */}
    </div>
  );
};

export default SectorsAboutDetails;
