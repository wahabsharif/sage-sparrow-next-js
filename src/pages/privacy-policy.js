import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import React from "react";
import PrivacyPolicyPage from "@/components/PrivacyPolicy/PrivacyPolicyPage";

const PrivacyPolicy = () => {
  return (
    <Layout pageTitle="Privacy Policy">
      <Header />
      <PageHeader title="Privacy Policy" />
      <PrivacyPolicyPage />
    </Layout>
  );
};

export default PrivacyPolicy;
