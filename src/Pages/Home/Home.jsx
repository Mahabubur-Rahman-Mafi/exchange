import React from "react";
import { Helmet } from "react-helmet";
import Adversite from "./Adversite";
import Banner from "./Banner";
import Categories from "./Category/Categories";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | ex-change</title>
      </Helmet>
      {/* items */}
      <Banner></Banner>
      <Categories></Categories>
      <Adversite></Adversite>
    </>
  );
};

export default Home;
