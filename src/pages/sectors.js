import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import React from "react";
import SectorsAbout from "@/components/Sectors/SectorsAbout";
import OurSectors from "@/components/Sectors/OurSectors";

const Services = () => {
  return (
    <Layout pageTitle=" - Our Sectors">
      <Header />
      <PageHeader title="Our Sectors" />
      <SectorsAbout />
      <OurSectors />
    </Layout>
  );
};

export default Services;
