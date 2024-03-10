import React from "react";
import Layout from "@/components/Layout/Layout";
import Header from "@/components/Header/Header";
import Banner from "@/components/Home/Banner";
import { bannerData } from "@/data/home/bannerData";
import Intro from "@/components/Home/Intro";
import OurSectors from "@/components/Home/OurSectors";
import OurServices from "@/components/Home/OurServices";
import SageSparrowDifference from "@/components/Home/SageSparrowDifference";

const Home = () => {
  return (
    <Layout pageTitle="">
      <Header />
      <Banner sliders={bannerData} showShape />
      <Intro />
      <OurSectors />
      <OurServices />
      <SageSparrowDifference />
    </Layout>
  );
};

export default Home;
