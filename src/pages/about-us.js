// import BrandOne from "@/components/BrandSection/BrandOne";
import CtaOne from "@/components/CtaSection/CtaOne";
import FreeConsultation from "@/components/FreeConsultation/FreeConsultation";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
// import OurMissionTwo from "@/components/OurMission/OurMissionTwo";
import PageHeader from "@/components/Reuseable/PageHeader";
// import TeamOne from "@/components/TeamSection/TeamOne";
// import TestimonialOne from "@/components/TestimonialSection/TestimonialOne";
import About from "@/components/AboutUs/About";
import WhyUs from "@/components/AboutUs/WhyUs";

const AboutUs = () => {
  return (
    <Layout pageTitle=" - About">
      <Header />
      <PageHeader page="About" title="About us" />
      <About />
      <FreeConsultation />
      <WhyUs />
      {/* <OurMissionTwo className="our-mission-three" shape={1} /> */}
      {/* <TeamOne /> */}
      {/* <TestimonialOne className="testimonial-two" /> */}
      {/* <BrandOne /> */}
      <CtaOne />
    </Layout>
  );
};

export default AboutUs;
