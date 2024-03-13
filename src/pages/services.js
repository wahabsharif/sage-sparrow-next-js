import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import React from "react";
import ServicesPage from "@/components/Services/ServicesPage";

const Services = () => {
  return (
    <Layout pageTitle=" - Our Services">
      <Header />
      <PageHeader title="Our Services" />
      <ServicesPage />
    </Layout>
  );
};

export default Services;
