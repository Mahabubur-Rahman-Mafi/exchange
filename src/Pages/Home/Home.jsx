import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from './Banner';


const Home = () => {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home | ex-change</title>
        </Helmet>
        {/* items */}
        <Banner></Banner>
      </>
    );
};

export default Home;