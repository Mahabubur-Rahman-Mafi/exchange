import React from "react";
import { Helmet } from "react-helmet";
import Product from "../Porducts/Product";
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
    </>
  );
};

export default Home;
