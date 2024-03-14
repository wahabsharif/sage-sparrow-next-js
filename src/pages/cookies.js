import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import React from "react";
import CookiesPolicyPage from "@/components/Cookies/CookiesPolicyPage";

const CookiesPolicy = () => {
  return (
    <Layout pageTitle=" - Cookies Policy">
      <Header />
      <PageHeader title="Cookies Policy" />
      <CookiesPolicyPage />
    </Layout>
  );
};

export default CookiesPolicy;
